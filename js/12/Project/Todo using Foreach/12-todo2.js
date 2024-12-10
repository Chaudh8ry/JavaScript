const todoList = []; //intializing empty array to store TODO items

renderTodoList(); //displays current TODO list on webpage


//Function to Add a New To-Do Item
function addTodo(){
 const inputElement = document.querySelector('.js-name-input'); //gets value of the input element
 const name = inputElement.value;

 const dateInputElement = document.querySelector('.js-due-date-input');
 const dueDate = dateInputElement.value;

 todoList.push({
  //  name : name,
  //  dueDate: dueDate,

  //if property and variable name are same 
  name,
  dueDate
 }); //adds value to the TodoList array

 inputElement.value = ''; //clears input field

  renderTodoList(); // calls renderTodoList to update the displayed list with the new item.
}

//Generating the HTML
function renderTodoList(){
  let todoListHTML = ''; //initalize empty TODO List

  todoList.forEach(function(todoObject,index){
    // const todoObject = todoList[index];
     
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;

    //Destructuring Object
    const {name,dueDate} = todoObject;
    
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick = "
      todoList.splice(${index},1);
      renderTodoList();  
    " class="delete-todo-button">Delete</button>
    `; //creating a paragraph (<p>) element for each to-do item
    todoListHTML += html; //appends each paragraph to todoListHTML
    document.querySelector('.js-todo-list')
      .innerHTML = todoListHTML; //updates the inner HTML of the element with the class js-todo-list to display the to-do items.
  });
}
