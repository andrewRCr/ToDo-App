// ./public/js/script.js

// TODO APP

// select everything
// select the todo-form
const todoForm = document.querySelector('.todo-form');
// select the task input box
const todoInput = document.querySelector('.todo-input');
// select the date input box
const dateInput = document.querySelector('.date-input');
// select the <ul> with class="todo-items"
const todoItemsList = document.querySelector('.todo-items');

// array which stores every todos
let todos = [];

// add an eventListener on form, and listen for submit event
todoForm.addEventListener('submit', function(event) {
  // prevent the page from reloading when submitting the form
  event.preventDefault();
  addTodo(todoInput.value, dateInput.value); // call addTodo function with the input box current values
});

// function to add todo
function addTodo(item, dueDate) {
  // if item is not empty
  if (item !== '') {
    // make a todo object, which has id, name, date, and completed properties
    const todo = {
      id: Date.now(),
      name: item,
      date: dueDate,
      completed: false
    };

    // then add it to todos array
    todos.push(todo);
    addToLocalStorage(todos);

    // finally clear the input box values
    todoInput.value = '';
    dateInput.value = '';
  }
}

// function to render given todos to screen
function renderTodos(todos) {
  // clear everything inside <ul> with class=todo-items
  todoItemsList.innerHTML = '';

  // run through each item inside todos
  todos.forEach(function(item) {
    // check if the item is completed
    const checked = item.completed ? 'checked': null;

    // make a <li> element and fill it
    // <li> </li>
    const li = document.createElement('li');
    // <li class="item"> </li>
    li.setAttribute('class', 'item');
    // <li class="item" data-key="20200708"> </li>
    li.setAttribute('data-key', item.id);
    /* <li class="item" data-key="20200708"> 
          <input type="checkbox" class="checkbox">
          Go to Gym
          <button class="delete-button">X</button>
        </li> */

    // if item is completed, then add a class to <li> called 'checked', which will add line-through style
    if (item.completed === true) {
      li.classList.add('checked');
    }

    // create with due date and date-button
    if (item.date != '') {
      li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      ${item.name}
      <button class="delete-button">X</button>
      <button class="date-button"><span>due: ${item.date}</span></button>
  
    `;
    }

    // create without due date or date-button
    else if (item.date == '') {
      li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      ${item.name}
      <button class="delete-button">X</button>
  
    `;
    }

    // finally add the <li> to the <ul>
    todoItemsList.append(li);
  });
}

// function to add todos to local storage
function addToLocalStorage(todos) {
  // convert the array to string, then store it
  localStorage.setItem('todos', JSON.stringify(todos));
  // render them to screen
  renderTodos(todos);
}

// function helps to get everything from local storage
function getFromLocalStorage() {
  const reference = localStorage.getItem('todos');
  // if reference exists
  if (reference) {
    // converts back to array and store it in todos array
    todos = JSON.parse(reference);
    renderTodos(todos);
  }
}

// toggle the value to completed and not completed
function toggle(id) {
  todos.forEach(function(item) {
    // use == not ===, because here types are different. One is number and other is string
    if (item.id == id) {
      // toggle the value
      item.completed = !item.completed;
    }
  });

  addToLocalStorage(todos);
}

// deletes a todo from todos array, then updates localstorage and renders updated list to screen
function deleteTodo(id) {
  // filters out the <li> with the id and updates the todos array
  todos = todos.filter(function(item) {
    // use != not !==, because here types are different. One is number and other is string
    return item.id != id;
  });

  // update the localStorage
  addToLocalStorage(todos);
}

// function to EDIT todo
function editTodo(id) {
  todos.forEach(function(item) {
    // use == not ===, because here types are different. One is number and other is string
    if (item.id == id) {
      todoInput.value = item.name;
      dateInput.value = item.date;
    }
  });
}

// initially get everything from localStorage
getFromLocalStorage();

// after that addEventListener <ul> with class=todoItems. Because we need to listen for click event in all delete-button and checkbox
todoItemsList.addEventListener('click', function(event) {
  // check if the event is on checkbox
  if (event.target.type === 'checkbox') {
    // toggle the state
    toggle(event.target.parentElement.getAttribute('data-key'));
  }

  // check if that is a delete-button
  if (event.target.classList.contains('delete-button')) {
    // get id from data-key attribute's value of parent <li> where the delete-button is present
    deleteTodo(event.target.parentElement.getAttribute('data-key'));
  }

    // check if that is a regular item click, for editing
    if (event.target.classList.contains('item')) {
      // get id from data-key attribute's value of parent <li> where the item is present
      editTodo(event.target.parentElement.getAttribute('data-key'));
    }

    // // check if that is a date-button push 
    // if (event.target.classList.contains('date-button')) {
    //   // get id from data-key attribute's value of parent <li> where the delete-button is present
    //   pushDatedTodo(event.target.parentElement.getAttribute('data-key'));
    // }
});

