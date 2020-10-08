// Define IU variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event liseners
loadEventListeners();


// Load all event liseners
function loadEventListeners() {
  // DOM Load event
  document.addEventListener('DOMContentLoaded', getTasks)
  // Add task form
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear task events
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks)

}

// Povuci podatke iz localstorage
function getTasks() {
  let item = JSON.parse(localStorage.getItem('tasks'))
  // console.log(item);
  if(item){
    item.forEach(e => {
      // console.log(typeof(e));
      addTask(e);
    })
  }
}



// ADD TASK
function addTask(event) {
  if(taskInput.value === '' && typeof(event) === 'object') {
    alert('Add the task');
    return;
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className='collection-item'
  // Create taxt node and append to li
  console.log(typeof(event));
  if( typeof(event) === 'object' ){
    li.appendChild(document.createTextNode(taskInput.value));
  } else {
    li.appendChild(document.createTextNode(event));
  }
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className='delete-item secondary-content';
  // Add icon html
  link.innerHTML='<i class="fa fa-remove"></i>'
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // store in localstorage
  if(typeof(event) === 'object'){
    storeTaskInLocalstorage(taskInput.value);
  }

  // Clear Input
  taskInput.value = '';
  if( typeof(event) === 'object' ) {
    event.preventDefault();
  }
}


// STORE TASK
function storeTaskInLocalstorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}



// REMOVE TASK
function removeTask (e) {
  if( e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Dali si siguran?')) {
      e.target.parentElement.parentElement.remove();

      // Remove from LS
      removeTaskFromLocalstorage(e.target.parentElement.parentElement);
    }
  }
}



// REMOVE TASK FROM LOCAL STORAGE
function  removeTaskFromLocalstorage(taskItem) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach((item, index) =>{
    if(taskItem.textContent === item){
      tasks.splice(index,1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks))
}



// CLEAR ALL TASKS
function clearTasks() {
  // prvi nacin taskList.innerHTML='';
  Array.from(taskList.children).forEach(data => {
    data.remove();
  })

  // Clear all tasks
  localStorage.removeItem('tasks')
}

// FILTER TASK
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach( e => {
    if(text === e.textContent || text === ''){
      e.style.display = 'block'
    } else {
      e.style.display = 'none'
    }
  })
}