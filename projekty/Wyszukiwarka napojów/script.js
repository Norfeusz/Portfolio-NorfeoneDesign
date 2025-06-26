const search = document.querySelector('.search')
const li = document.querySelectorAll('li')

const drinkSearch = e =>{

const text = e.target.value.toLowerCase()




    li.forEach(drink => {
      
        if (drink.textContent.toLowerCase().indexOf(text) !== -1){
            drink.style.display = 'block'
        }else{
            drink.style.display= 'none'
        }
        })
    

}

search.addEventListener('keyup', drinkSearch)


// console.log(li)
// const drinks =[]
// // drinks.push(liItem)

// // console.log(drinks)
// for (let i=0; i<=li.lenght; i++){
//    if (input.value == liItem) {
    

// const enterKeycheck = e => {
//     if(e){
//         searchEngine()
//     }
// }