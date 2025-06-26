const addBtn = document.querySelector('.add-icon')
const deleteAllBtn = document.querySelector('.delete-all')

const notePanel = document.querySelector('.note-panel')
const saveBtn = document.querySelector('.save-icon')
const cancelBtn = document.querySelector('.cancel-icon')

const noteArea = document.querySelector('.note-area')
const noteInput = document.querySelector('#text')
const deleteBtn = document.getElementsByClassName('.delete-note')
const category = document.querySelector('#category')

const error = document.querySelector('.error')
// const categorySelect = document.querySelector('select#category')

let selectedValue
let cardID = 0



const openPanel = () =>{
    notePanel.style.display = 'flex'
}

const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].text
}


const addNote = () => {
    
    
   if (noteInput.value !=='' && category.value !== '0'){
        
    const newNote = document.createElement('div')
    newNote.classList.add('note')
    newNote.setAttribute('id', cardID)


    const newHeader = document.createElement('div')
    newHeader.classList.add('note-header')

    const newTitle = document.createElement('h3')
    newTitle.classList.add('note-title')
    newTitle.textContent = (selectedValue)
    

    const newDelete = document.createElement('button')
    newDelete.classList.add('delete-note')
    newDelete.innerHTML = ' <i class="fas fa-times icon"></i>'

    const noteValue = document.createElement('div')
    noteValue.classList.add('note-body')
    noteValue.textContent = noteInput.value

   
        // const selectedCategory = categorySelect.value;
    
    //     if (selectedValue === 'Praca') {
        
    //     newNote.style.backgroundColor='red'
    // }

    // else if(selectedValue === 'Zakupy'){
    //     newNote.style.backgroundColor='green'
    // }else{
    //     newNote.style.backgroundColor='yellow'
    // }



     noteArea.appendChild(newNote)
     newNote.appendChild(newHeader)
     newHeader.appendChild(newTitle)
     newNote.appendChild(noteValue) 
     newHeader.appendChild(newDelete)
  
     
    notePanel.style.display = 'none'
    cardID++
    noteInput.value =''
    error.style.visibility = 'hidden'
    category.value='0'
    checkColor(newNote)


 
    const deleteNote = () => {
        newNote.remove()
    }
    newDelete.addEventListener('click', deleteNote)
     
}else{
    error.style.visibility = 'visible'

}

}


const cancelNote = () => {
    notePanel.style.display = 'none'
    error.style.visibility = 'hidden'
    noteInput.value ='' 
    category.value='0'
}

const checkColor = note =>{
    switch (selectedValue) {
        case 'Shopping':
            note.style.backgroundColor='rgb(72,255,0)'
            break
        case 'Work':
            note.style.backgroundColor='rgb(255,243,0)'
            break
        case 'Other':
            note.style.backgroundColor='rgb(0,170,255)'
            break
    }
}

const deleteAll = () => {
    noteArea.textContent = ''
   
}


addBtn.addEventListener('click', openPanel)
cancelBtn.addEventListener('click', cancelNote)
saveBtn.addEventListener('click', addNote)
deleteAllBtn.addEventListener('click', deleteAll)
