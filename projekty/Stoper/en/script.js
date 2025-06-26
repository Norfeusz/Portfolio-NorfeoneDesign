const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.history')
const stopWatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')

const infoBtn = document.querySelector('.fa-question')
const modalShadow = document.querySelector('.modal-shadow')
const closeModalBtn = document.querySelector('.close')

const colorBtn = document.querySelector('.fa-paint-brush')
const colorPanel = document.querySelector('.colors');

let root = document.querySelector(":root");
const color1 = document.querySelector('.color1')
const color2 = document.querySelector('.color2')
const color3 = document.querySelector('.color3')

let countTime
let minutes = 0
let seconds = 0

let counter = 0
timeList.classList.add('hide')

const handleStart = () =>{
    clearInterval(countTime)
    
    countTime = setInterval (() => {
      
        if (seconds<9){
            seconds++
            stopWatch.textContent=`${minutes}:0${seconds}`
        } else if(seconds<59){
            seconds++
            stopWatch.textContent=`${minutes}:${seconds}`
        }else {
            minutes++
            seconds = 0
            stopWatch.textContent=`${minutes}:00`
            
        }
    
},100);
}

const handlePause = () => {
    clearInterval(countTime)
}

const handleStop = () => {
    if(stopWatch.textContent !== '0:00'){
        
        time.style.visibility = 'visible'
        time.innerHTML = `Last result: ${stopWatch.textContent}`
        counter++
    }
    
    clearInterval(countTime)
    


    
     const liItem = document.createElement('li') 
     if(stopWatch.textContent !== '0:00'){
        liItem.innerHTML = `Result number ${counter} equals : <span> ${stopWatch.textContent}<span>`
     }

    timeList.appendChild(liItem)
  

    minutes =  0
    seconds = 0
    stopWatch.textContent=`0:00`
}



const showHistory = () => {
    timeList.classList.toggle('hide')
   
}

const resetScores =() =>{
    clearInterval(countTime)
    stopWatch.textContent=`0:00`
    timeList.textContent= ''
    counter = 0
    timeList.classList.add('hide')
    time.style.visibility= 'hidden'
    // colorPanel.classList.remove('.show-colors')
}

const showShadow =() =>{
   if(!(modalShadow.style.display==='block')){
     modalShadow.style.display = 'block'
   }else{
    modalShadow.style.display = 'none'
   }

   modalShadow.classList.toggle('modal-animation')
}

// const showColors = () => {
//     if(!(colors.style.display==='block')){
//         colors.style.display = 'block'
//       }else{
//        colors.style.display = 'none'
//       }
// }



const color1Change = () => {
    root.style.setProperty('--first-color', 'rgb(250, 20, 6)');
    root.style.setProperty('--hover-color', 'rgb(209, 33, 24)');
}
const color2Change = () => {
    root.style.setProperty('--first-color', 'rgb(6, 173, 250)');
    root.style.setProperty('--hover-color', 'rgb(28, 145, 199)');
}
const color3Change = () => {
    root.style.setProperty('--first-color', 'rgb(0, 255, 42)');
    root.style.setProperty('--hover-color', 'rgb(28, 209, 58)');
}

startBtn.addEventListener('click', handleStart)
pauseBtn.addEventListener('click', handlePause)
stopBtn.addEventListener('click', handleStop)
historyBtn.addEventListener('click', showHistory )
resetBtn.addEventListener('click', resetScores)

infoBtn.addEventListener('click', showShadow)
closeModalBtn.addEventListener('click', showShadow)
window.addEventListener('click', e=> e.target === modalShadow ? showShadow(): false)
// colorsBtn.addEventListener('click', showColors)

colorBtn.addEventListener('click', () => {
    colorPanel.classList.toggle('show-colors')
})
color1.addEventListener('click', color1Change)
color2.addEventListener('click', color2Change)
color3.addEventListener('click', color3Change)
