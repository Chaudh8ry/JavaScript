const arr = [];

function addTodo(){
  const task = document.querySelector('.js-task');
  const value = task.value;

  arr.push(value);
  
  task.value = '';
  
  renderTodo();
}

function renderTodo(){
  let todoListHTML = '';
  for(let i=0; i<arr.length; i++){
    // const add = arr[i];
    // const html = `<p>${add}</p>`;
    todoListHTML += `
      <p>${arr[i]}</p>
      <button onclick = '
        arr.splice(${i},1);
        renderTodo();
      '>Delete</button>
    `;
  }
  console.log(todoListHTML);

  const show = document.querySelector('.displayTask');
  show.innerHTML = todoListHTML;
}