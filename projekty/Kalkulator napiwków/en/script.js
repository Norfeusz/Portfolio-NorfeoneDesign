const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const countBtn = document.querySelector('.count')
const err = document.querySelector('.error')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const showBill = () => {
    if(price.value==''|| people.value==''|| tip.value== -1){
        err.textContent='Fulfill each input!'
        costInfo.style.display='none'
    } else{

        err.textContent = ''
        
        const priceInput = parseFloat(price.value)
        const peopleInput = parseInt(people.value)
        const tipPercent = parseFloat(tip.value)

        const amount = (priceInput + priceInput * tipPercent)/peopleInput
        costInfo.style.display='block'
        cost.textContent= amount.toFixed(2)
      
    }
}

const enterKeycheck = e => {
    if(e.key === 'Enter'){
        showBill()
    }
}

document.addEventListener('keyup', enterKeycheck)
countBtn.addEventListener('click', showBill)


