// grab the elements that we need
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

// create function to add a new task
function addTask() {
  const taskText = taskInput.value.trim()

  if (taskText !== '') {
    const listItem = document.createElement('li');

    listItem.textContent = taskText;

    listItem.addEventListener('click', function() {
      taskList.removeChild(listItem);
    });

    taskList.appendChild(listItem);
  }
}

addTaskButton.addEventListener('click', addTask);