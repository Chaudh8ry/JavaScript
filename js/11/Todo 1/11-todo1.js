const todoList = []; //intializing empty array to store TODO items

renderTodoList(); //displays current TODO list on webpage


//Function to Add a New To-Do Item
function addTodo(){
 const inputElement = document.querySelector('.js-name-input'); //gets value of the input element
 const name = inputElement.value;

 todoList.push(name); //adds value to the TodoList array

 inputElement.value = ''; //clears input field

  renderTodoList(); // calls renderTodoList to update the displayed list with the new item.
}

//Generating the HTML
function renderTodoList(){
  let todoListHTML = ''; //initalize empty TODO List

  for(let i = 0; i < todoList.length; i++){
    const todo = todoList[i]; //gets the current to-do item.
    const html = `<p>${todo}</p>`; //creating a paragraph (<p>) element for each to-do item
    todoListHTML += html; //appends each paragraph to todoListHTML
    document.querySelector('.js-todo-list')
      .innerHTML = todoListHTML; //updates the inner HTML of the element with the class js-todo-list to display the to-do items.
  }
}