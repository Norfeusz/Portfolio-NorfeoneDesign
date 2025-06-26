/*konwerter temperatury*/
const converterWebsite = document.querySelector('.converter-website')
const converterHtml = document.querySelector('.converter-html')


const converterWebsiteOpen = ()=>{
    const actualLanguage = localStorage.getItem('language')
    if(actualLanguage === 'pl'){
    window.open('./projekty/Konwerter temperatury/pl/index.html', '_blank')}else{
        window.open('./projekty/Konwerter temperatury/en/index.html', '_blank')
    }
}
const converterHtmlOpen = ()=>{
    const actualLanguage = localStorage.getItem('language')
    if(actualLanguage === 'pl'){
    window.open('./projekty/Konwerter temperatury/pl/index.txt', '_blank')}else{
        window.open('./projekty/Konwerter temperatury/en/index.txt', '_blank')
    }
}

converterWebsite.addEventListener('click', converterWebsiteOpen)
converterHtml.addEventListener('click', converterHtmlOpen)

/*apka pogodowa*/
const weatherWebsite = document.querySelector('.weather-website')
const weatherHtml = document.querySelector('.weather-html')

const weatherWebsiteOpen = ()=>{
    const actualLanguage = localStorage.getItem('language')
    if(actualLanguage === 'pl'){
    window.open('./projekty/WeatherApp_pliki_startowe/pl/index.html', '_blank')}else{
        window.open('./projekty/WeatherApp_pliki_startowe/en/index.html', '_blank')
    }
}
const weatherHtmlOpen = ()=>{
    const actualLanguage = localStorage.getItem('language')
    if(actualLanguage === 'pl'){
    window.open('./projekty/WeatherApp_pliki_startowe/pl/index.txt', '_blank')}else{
        window.open('./projekty/WeatherApp_pliki_startowe/en/index.txt', '_blank')
    }
}


weatherWebsite.addEventListener('click', weatherWebsiteOpen)
weatherHtml.addEventListener('click', weatherHtmlOpen)

/*menadżer finansów*/
const financesWebsite = document.querySelector('.finances-website')
const financesHtml = document.querySelector('.finances-html')
const financesJs = document.querySelector('.finances-js')

const financesWebsiteOpen = ()=>{
    const actualLanguage = localStorage.getItem('language')
    if(actualLanguage === 'pl'){
    window.open('./projekty/Menadżer finansów/pl/index.html', '_blank')}else{
        window.open('./projekty/Menadżer finansów/en/index.html', '_blank')
    }
}
const financesHtmlOpen = ()=>{
    const actualLanguage = localStorage.getItem('language')
    if(actualLanguage === 'pl'){
    window.open('./projekty/Menadżer finansów/pl/index.txt', '_blank')}else{
        window.open('./projekty/Menadżer finansów/en/index.txt', '_blank')
    }
}
const financesJsOpen = ()=>{
    const actualLanguage = localStorage.getItem('language')
    if(actualLanguage === 'pl'){
    window.open('./projekty/Menadżer finansów/script.js', '_blank')}else{
        window.open('./projekty/Menadżer finansów/en/script.js', '_blank')
    }
}


financesWebsite.addEventListener('click', financesWebsiteOpen)
financesHtml.addEventListener('click', financesHtmlOpen)
financesJs.addEventListener('click', financesJsOpen)
/*stoper*/
const timerWebsite = document.querySelector('.timer-website')
const timerHtml = document.querySelector('.timer-html')
const timerJs = document.querySelector('.timer-js')

const timerWebsiteOpen = ()=>{
    const actualLanguage = localStorage.getItem('language')
    if(actualLanguage === 'pl'){
    window.open('./projekty/Stoper/pl/index.html', '_blank')}else{
        window.open('./projekty/Stoper/en/index.html', '_blank')
    }
}
const timerHtmlOpen = ()=>{
    const actualLanguage = localStorage.getItem('language')
    if(actualLanguage === 'pl'){
    window.open('./projekty/Stoper/pl/index.txt', '_blank')}else{
        window.open('./projekty/Stoper/en/index.txt', '_blank')
    }
}
const timerJsOpen = ()=>{
    const actualLanguage = localStorage.getItem('language')
    if(actualLanguage === 'pl'){
    window.open('./projekty/Stoper/script.js', '_blank')}else{
        window.open('./projekty/Stoper/en/script.js', '_blank')
    }
}


timerWebsite.addEventListener('click', timerWebsiteOpen)
timerHtml.addEventListener('click', timerHtmlOpen)
timerJs.addEventListener('click', timerJsOpen)

/*wyszukiwarka napojów*/
const drinksWebsite = document.querySelector('.drinks-website')
const drinksHtml = document.querySelector('.drinks-html')

const drinksWebsiteOpen = ()=>{
    const actualLanguage = localStorage.getItem('language')
    if(actualLanguage === 'pl'){
    window.open('./projekty/Wyszukiwarka napojów/pl/index.html', '_blank')}else{
        window.open('./projekty/Wyszukiwarka napojów/en/index.html', '_blank')
    }
}
const drinksHtmlOpen = ()=>{
    const actualLanguage = localStorage.getItem('language')
    if(actualLanguage === 'pl'){
    window.open('./projekty/Wyszukiwarka napojów/pl/index.txt', '_blank')}else{
        window.open('./projekty/Wyszukiwarka napojów/en/index.txt', '_blank')
    }
}


drinksWebsite.addEventListener('click', drinksWebsiteOpen)
drinksHtml.addEventListener('click', drinksHtmlOpen)

/*notatnik*/
const notepadWebsite = document.querySelector('.notepad-website')
const notepadHtml = document.querySelector('.notepad-html')
const notepadJs = document.querySelector('.notepad-js')

const notepadWebsiteOpen = ()=>{
    const actualLanguage = localStorage.getItem('language')
    if(actualLanguage === 'pl'){
    window.open('./projekty/Notatnik/pl/index.html', '_blank')}else{
        window.open('./projekty/Notatnik/en/index.html', '_blank')
    }
}
const notepadHtmlOpen = ()=>{
    const actualLanguage = localStorage.getItem('language')
    if(actualLanguage === 'pl'){
    window.open('./projekty/Notatnik/pl/index.txt', '_blank')}else{
        window.open('./projekty/Notatnik/en/index.txt', '_blank')
    }
}
const notepadJsOpen = ()=>{
    const actualLanguage = localStorage.getItem('language')
    if(actualLanguage === 'pl'){
    window.open('./projekty/Notatnik/script.js', '_blank')}else{
        window.open('./projekty/Notatnik/en/script.js', '_blank')
    }
}


notepadWebsite.addEventListener('click', notepadWebsiteOpen)
notepadHtml.addEventListener('click', notepadHtmlOpen)
notepadJs.addEventListener('click', notepadJsOpen)

/*odliczanie czasu*/
const countdownWebsite = document.querySelector('.countdown-website')
const countdownHtml = document.querySelector('.countdown-html')
const countdownJs = document.querySelector('.countdown-js')

const countdownWebsiteOpen = ()=>{
    const actualLanguage = localStorage.getItem('language')
    if(actualLanguage === 'pl'){
    window.open('./projekty/Odliczanie czasu/pl/index.html', '_blank')}else{
        window.open('./projekty/Odliczanie czasu/en/index.html', '_blank')
    }
}
const countdownHtmlOpen = ()=>{
    const actualLanguage = localStorage.getItem('language')
    if(actualLanguage === 'pl'){
    window.open('./projekty/Odliczanie czasu/pl/index.txt', '_blank')}else{
        window.open('./projekty/Odliczanie czasu/en/index.txt', '_blank')
    }
}
const countdownJsOpen = ()=>{
    const actualLanguage = localStorage.getItem('language')
    if(actualLanguage === 'pl'){
    window.open('./projekty/Odliczanie czasu/script.js', '_blank')}else{
        window.open('./projekty/Odliczanie czasu/en/script.js', '_blank')
    }
}


countdownWebsite.addEventListener('click', countdownWebsiteOpen)
countdownHtml.addEventListener('click', countdownHtmlOpen)
countdownJs.addEventListener('click', countdownJsOpen)

/*kalkulator napiwków*/
const calculatorWebsite = document.querySelector('.calculator-website')
const calculatorHtml = document.querySelector('.calculator-html')
const calculatorJs = document.querySelector('.calculator-js')

const calculatorWebsiteOpen = ()=>{
    const actualLanguage = localStorage.getItem('language')
    if(actualLanguage === 'pl'){
    window.open('./projekty/Kalkulator napiwków/pl/index.html', '_blank')}else{
        window.open('./projekty/Kalkulator napiwków/en/index.html', '_blank')
    }
}
const calculatorHtmlOpen = ()=>{
    const actualLanguage = localStorage.getItem('language')
    if(actualLanguage === 'pl'){
    window.open('./projekty/Kalkulator napiwków/pl/index.txt', '_blank')}else{
        window.open('./projekty/Kalkulator napiwków/en/index.txt', '_blank')
    }
}
const calculatorJsOpen = ()=>{
    const actualLanguage = localStorage.getItem('language')
    if(actualLanguage === 'pl'){
    window.open('./projekty/Kalkulator napiwków/script.js', '_blank')}else{
        window.open('./projekty/Kalkulator napiwków/en/script.js', '_blank')
    }
}


calculatorWebsite.addEventListener('click', calculatorWebsiteOpen)
calculatorHtml.addEventListener('click', calculatorHtmlOpen)
calculatorJs.addEventListener('click', calculatorJsOpen)

/*walidator hasła*/
const walidatorWebsite = document.querySelector('.walidator-website')
const walidatorHtml = document.querySelector('.walidator-html')
const walidatorJs = document.querySelector('.walidator-js')

const walidatorWebsiteOpen = ()=>{
    const actualLanguage = localStorage.getItem('language')
    if(actualLanguage === 'pl'){
    window.open('./projekty/Walidator hasła/pl/index.html', '_blank')}else{
        window.open('./projekty/Walidator hasła/en/index.html', '_blank')
    }
}
const walidatorHtmlOpen = ()=>{
    const actualLanguage = localStorage.getItem('language')
    if(actualLanguage === 'pl'){
    window.open('./projekty/Walidator hasła/pl/index.txt', '_blank')}else{
        window.open('./projekty/Walidator hasła/en/index.txt', '_blank')
    }
}
const walidatorJsOpen = ()=>{
    const actualLanguage = localStorage.getItem('language')
    if(actualLanguage === 'pl'){
    window.open('./projekty/Walidator hasła/script.js', '_blank')}else{
        window.open('./projekty/Walidator hasła/en/script.js', '_blank')
    }
}


walidatorWebsite.addEventListener('click', walidatorWebsiteOpen)
walidatorHtml.addEventListener('click', walidatorHtmlOpen)
walidatorJs.addEventListener('click', walidatorJsOpen)