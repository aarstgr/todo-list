//add an eventListener to the from
const textInputField = document.querySelector('#text-input-field'); 
const addButton = document.querySelector('#add-button'); 
const todosContainer = document.querySelector('.todos-container');


addButton.addEventListener('click', ()=>{
    if (textInputField.value.trim().length=='')
    return;

// create div add class todo-item-container
const todoItemContainer=document.createElement('ul');
todoItemContainer.classList.add('todo-item-container');


    todosContainer.appendChild(todoItemContainer);


    //create li element add id = todo-text
    const todoText = document.createElement('li');
    todoText.id='todo-text';
    todoText.innerText =textInputField.value;
    todoItemContainer.appendChild(todoText);

//add double click to todolist
todoText.addEventListener('dblclick', ()=>{
    todoText.classList.add('line-through');
    todoText.style.background= '#0ec135e2';
    editButton.setAttribute("disabled" , "disabled")
})

 


    //creat button add id=delete-button
    const deleteButton=document.createElement('button')
    deleteButton.id='delete-button';
    deleteButton.className='delete'

    //create img add to delete button
   
     deleteButton.innerText='  x  '
    todoItemContainer.appendChild(deleteButton);
   
   
    //add click event to delete-button here

    deleteButton.addEventListener('click',()=>{
    const parent=deleteButton.parentElement;
    parent.parentElement.removeChild(parent);
}
);
   //create button add id=edit-button
   const editButton =document.createElement('button')
   editButton.id='edit-button';
   //create img add to edit button
   const editImage=document.createElement('img')
editImage.src='edit.svg'
editButton.appendChild(editImage); 
   todoItemContainer.appendChild(editButton);
  
  
   //add click event to edit-button here

   editButton.addEventListener('click',()=>{
   textInputField.value=todoText.innerText;
   const parent= editButton.parentElement;
   parent.parentElement.removeChild(parent)
  })






    textInputField.value="";
})