// Select the DOM elements
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// create the array to store the to-do's
let todos = [];


// load the to-dos from localStorage
const loadTodos = () => {
  const storedTodos = localStorage.getItem('todos')
  if (storedTodos) {
    //convert back to array
    todos = JSON.parse(storedTodos);
    renderTodos();
  }
}

//create function to save to-dos in localStorage
const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// create function to add new todo's
const addTodo = () => {
  const todoText = todoInput.value.trim(); //like gets.chomp, the trim is equivalent to chomp
  if (todoText !== '') {
    const newTodo = {
      text: todoText,
      completed: false
    }

    todos.push(newTodo);
    todoInput.value = '';
    renderTodos();
    saveTodos();
  }
}

addButton.addEventListener('click', addTodo);

// function to render the to-do list
const renderTodos = () => {
  // clear the current list
  todoList.innerHTML = '';

  // loop through the to-dos and create the list items <li>test</li>
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = todo.text;

    // add 'completed' class if the to-do is completed
    if (todo.completed) {
      li.classList.add('completed');
    }

    //Create 'Completed' button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', () => {
      toggleComplete(index);
    });

    //Create 'Delete' button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteTodo(index);
      alert('Task has been deleted');
    });

    // add the complete button to the list item
    li.appendChild(completeButton);

    // add the delete button to the list item
    li.appendChild(deleteButton);

    // adds the list item to the to do list
    todoList.appendChild(li);
  })
}

// create the function to toggle the 'completed' status
const toggleComplete = (index) => {
  todos[index].completed = !todos[index].completed
  renderTodos();
  saveTodos();
}

// create the delete to-do function
const deleteTodo = (index) => {
  todos.splice(index, 1);
  renderTodos();
  saveTodos();
}

loadTodos();