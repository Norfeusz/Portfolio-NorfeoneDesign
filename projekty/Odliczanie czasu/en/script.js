const addPanelBtn = document.querySelector('.settings-btn')
const settings = document.querySelector('.settings')

const eventName = document.querySelector('.event')
const daysCount = document.querySelector('.days-count')
const hoursCount = document.querySelector('.hours-count')
const minutesCount = document.querySelector('.minutes-count')
const secondsCount = document.querySelector('.seconds-count')
const cardTitle = document.querySelector('.card-title')


const imageSection = document.querySelector('.image-section')
const image = document.querySelector('.photo')

const nameInput = document.querySelector('#event-name')
const dayInput = document.querySelector('#event-day')
const monthInput = document.querySelector('#event-month')
const yearInput = document.querySelector('#event-year')
const imageInput = document.querySelector('#event-image')
const saveBtn = document.querySelector('.save')

const daysTitle = document.querySelector('#day-title')
const hoursTitle = document.querySelector('#hours-title')
const minutesTitle = document.querySelector('#minutes-title')
const secsTitle = document.querySelector('#secs-title')



const date = new  Date()

dayInput.value = date.getDate()
monthInput.value = date.getMonth()+1
yearInput.value = date.getFullYear()



addPanelBtn.addEventListener('click', () => {
    settings.classList.toggle('active');
})

const confirmEvent = () => {
  
    eventName.textContent = nameInput.value

    setInterval(calculateTimeDifference, 1000)

    image.src = imageInput.value

}

const calculateTimeDifference = () => {
    const todayDate = new Date ()
    const eventDate = new Date (yearInput.value, monthInput.value -1, dayInput.value)
    const msInADay = (24 * 60 * 60 * 1000)
    const msInaHour = (60*60*1000)
    const msInaMinute = (60*1000)
    const msInaSec = 1000


    const timeDifference = (eventDate.getTime() - todayDate.getTime())
   
    if(timeDifference>=0){
    differenceInDays = Math.floor(timeDifference/msInADay)
    daysCount.textContent = differenceInDays
    
    const hrs = (timeDifference/msInaHour) - (differenceInDays*24)
    differenceInHours = Math.floor(hrs)
    hoursCount.textContent = differenceInHours
   
    const mnts = (hrs - Math.floor(hrs))*60
    differenceInMinutes = Math.floor(mnts)
    minutesCount.textContent = differenceInMinutes

    differenceInSecs = Math.floor((mnts - Math.floor(mnts))*60)
    secondsCount.textContent = differenceInSecs
   
    if (differenceInDays ==1){
        daysTitle.innerText ="Day"
    } else {
        daysTitle.innerText ="Days"
    }
    if (differenceInHours == 1){
        hoursTitle.innerText = "Hours"
    } else {
        hoursTitle.innerText = "Hour"
    }
    if(differenceInMinutes ==1 ){
        minutesTitle.innerText = "Minute"
    }else {
        minutesTitle.innerText = "Minutes"
    }
}else{
    daysCount.textContent = '0'
    hoursCount.textContent = '0'
    minutesCount.textContent = '0'
    secondsCount.textContent = '0'

}
    
}

   saveBtn.addEventListener('click', confirmEvent)
   saveBtn.addEventListener('click', () => {
    settings.classList.remove('active')} )