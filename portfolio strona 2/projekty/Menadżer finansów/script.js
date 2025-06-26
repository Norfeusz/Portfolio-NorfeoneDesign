const incomeArea = document.querySelector('.income-area')
const transactionName = document.querySelectorAll('.transaction-name')
const expensesArea = document.querySelector('.expenses-area')
const transactionAmount = document.querySelectorAll('.transaction-amount')
const availableMoney = document.querySelector('.available-money')
const transactions = document.querySelectorAll('.transaction')

const addBtn = document.querySelector('.add-panel')
const deleteAllBtn = document.querySelector('.delete-all')
const lightBtn = document.querySelector('.light')
const darkBtn = document.querySelector('.dark')

const panel = document.querySelector('.add-transaction-panel')
const nameInput = document.querySelector('#name')
const amountInput = document.querySelector('#amount')
const category = document.querySelector('#category')

const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')

let root = document.querySelector(":root")
let transactionID = 0
let balance = []
let categoryIcon




const checkForm = () => {
    if(nameInput.value !== '' && amountInput.value !=='' && category.value !== 'none'){
        addNewTransaction()
    }else{
        alert('Wypełnij wszystkie pola!')
    }
}



const addNewTransaction = () => {
    
    const newTransaction = document.createElement('div')
    newTransaction.classList.add('transaction')
    newTransaction.setAttribute('id', transactionID)

    checkCategory()

    newTransaction.innerHTML = `
        <p class="transaction-name">
        ${categoryIcon} ${nameInput.value}
        </p>
        <p class="transaction-amount">
        ${amountInput.value} zł
        <button class="delete" onclick="deleteTransaction(${transactionID})"><i class="fas fa-times icon"></i></button>
        </p>
    `
    
   
    if(category.value=='income'){
        incomeArea.append(newTransaction)
        newTransaction.classList.add('income')
    }else{
        expensesArea.append(newTransaction)
        newTransaction.classList.add('expense')
    }   


    balance.push(parseFloat(amountInput.value)) 
    countMoney(balance)
    transactionID++
    panel.style.display= 'none'
    clearInputs()
    // console.log(balance)
}

const countMoney = (money) => {
    if (money.length == 0){
        availableMoney.textContent = '0zł'
    }else{
        const newMoney = money.reduce((a,b)=> a + b)
        availableMoney.textContent = `${newMoney}zł`

    }
}


   // const newTransaction = document.createElement('div')
    // newTransaction.classList.add('transaction')
    // newTransaction.setAttribute('id', transactionID)

    // const newName = document.createElement('p')
    // newName.classList.add('transaction-name')

    // const newAmount = document.createElement('p')
    // newAmount.classList.add('transaction-amount')
    // newAmount.innerHTML= `${amountInput.value}zł `
    


    // const newDelete = document.createElement('button')
    // newDelete.classList.add('delete')
    // newDelete.innerHTML = ' <i class="fas fa-times icon"></i>'
    // newDelete.setAttribute('id', transactionID)


    const deleteTransaction = (id) => {
        const transactionToDelete = document.getElementById(id)
        const transactionAmount = parseFloat(transactionToDelete.childNodes[3].innerText)
        const indexofTransaction = balance.indexOf(transactionAmount)
   
    
        balance.splice(indexofTransaction , 1)
        // console.log(balance)
        
        transactionToDelete.classList.contains('income') ? incomeArea.removeChild(transactionToDelete) : expensesArea.removeChild(transactionToDelete)
        countMoney(balance)
    }


   const deleteAll =()=> {
    incomeArea.textContent=''
    const newHeaderIncome = document.createElement('h3')
    newHeaderIncome.textContent = 'Przychód:'
    incomeArea.append(newHeaderIncome)
 
    expensesArea.textContent=''
    const newHeaderExpense = document.createElement('h3')
    newHeaderExpense.textContent = 'Wydatki:'
    expensesArea.append(newHeaderExpense)

    balance = []
    transactionID = 0
    availableMoney.textContent = `0zł`
  }   





const checkCategory = () => {
    if(category.value=='income'){
        categoryIcon = `<i class="fas fa-money-bill-wave"></i>`
    }else if(category.value=='shopping'){
        categoryIcon = `<i class="fas fa-cart-arrow-down"></i>`
    }else if (category.value=='food'){
        categoryIcon = `<i class="fas fa-hamburger"></i> `
    }else if (category.value=='cinema'){
        categoryIcon = `<i class="fas fa-film"></i>`
    }
}

const addPanel = () => {
    panel.style.display = 'flex'
   }
   
   const cancel = () =>{
       panel.style.display = 'none'
       clearInputs()
   }
   
   const clearInputs =()=>{
    nameInput.value = ''
    amountInput.value = ''
    category.value = 'none'
    }

   const makeDark = () => {
       root.style.setProperty('--dark', '#F9F9F9')
       root.style.setProperty('--light', '#14161f')
   }
   
   const makeLight = () => {
       root.style.setProperty('--light', '#F9F9F9')
       root.style.setProperty('--dark', '#14161f')
   }


darkBtn.addEventListener('click', makeDark)
lightBtn.addEventListener('click', makeLight)

addBtn.addEventListener('click', addPanel)
cancelBtn.addEventListener('click', cancel)
saveBtn.addEventListener('click', checkForm)
deleteAllBtn.addEventListener('click', deleteAll)