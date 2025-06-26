const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

let farenheit
let celsius

const switcher = ()  =>{
    if(one.textContent === '°C'){
        one.textContent = '°F'
        two.textContent = '°C'
        result.textContent = ''
        converter.value = ''
    }else{
        one.textContent = '°C'
        two.textContent = '°F'
    }
}

 const farToCel = () => {
if(one.textContent === '°C'){
farenheit = converter.value*1.8+32
result.textContent = `${converter.value}°C to ${farenheit.toFixed(1)}°F `
}else{ 
    celsius = (converter.value-32)/1.8
    result.textContent =`${converter.value}°F to ${celsius.toFixed(1)}°C `}


}

const resetet = () =>{
    result.textContent = ''
    converter.value = ''
    one.textContent = '°C'
    two.textContent = '°F'
}



changeBtn.addEventListener('click', switcher)
convBtn.addEventListener('click', farToCel)
resetBtn.addEventListener('click', resetet)