const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')


const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = '&appid=beebd281967116a4196be8f30351e822'
const API_UNITS = '&units=metric'

const getWeather = () => {
    const city = input.value || 'Amsterdam'
    const URL = API_LINK + city + API_KEY + API_UNITS

   axios.get(URL)
        .then(res =>{
             console.log(res.data)
            const temp = res.data.main.temp
            const hum = res.data.main.humidity
            const status = Object.assign({}, ...res.data.weather)
             
            cityName.textContent = res.data.name
            temperature.textContent =`${Math.floor(temp)}°C`
            humidity.textContent = hum +'%'
            weather.textContent = status.main

            warning.textContent = ''
            input.value = ''

            if (status.id<300){
                photo.setAttribute('src', '../img/thunderstorm.png')
            }  else if (status.id<500){
                photo.setAttribute('src', '../img/drizzle.png')
            } else if (status.id<600){
            photo.setAttribute('src', '../img/rain.png')
            }else if (status.id<700){
            photo.setAttribute('src', '../img/ice.png')
            }else if (status.id<800){
            photo.setAttribute('src', '../img/fog.png')
            }else if (status.id===800){
            photo.setAttribute('src', '../img/sun.png')
            }else if (status.id<900){
            photo.setAttribute('src', '../img/cloud.png')
             } else{
            photo.setAttribute('src', '../img/unknow.png')
            }
        }).catch(() => warning.textContent ='Wpisz poprawną nazwę miasta!')
}


const enterKeycheck = e => {
    if(e.key === 'Enter'){
        getWeather()
    }
}
input.addEventListener('keyup', enterKeycheck)
button.addEventListener('click', getWeather)