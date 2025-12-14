
let tasks = []

function createTaskEle(task) {
  let div = document.createElement('div')
  div.classList.add('task-card')
  div.textContent = task.content
  div.dataset.taskId = task.id
  div.setAttribute('draggable', 'true')
  let button = document.createElement('button')
  button.textContent = 'X'
  button.classList.add('delete-btn')
  div.append(button)
  return div
}

function renderTasks() {
  let taskCards = document.querySelectorAll('.task-cards')
  taskCards.forEach(ele => {
    ele.innerHTML = ''
  })
  tasks.forEach(task => {
    let taskEle = createTaskEle(task)
    let taskContainer = [...taskCards].find(taskCard => taskCard.dataset.id === task.status)
    taskContainer.append(taskEle)
  })
}

function saveTasks() {
  let taskState = JSON.stringify(tasks)
  localStorage.setItem('kanban-tasks', taskState)
}

function loadTasks() {
  jsonString = localStorage.getItem('kanban-tasks')
  if (jsonString) {
    let taskData = JSON.parse(jsonString)
    tasks = taskData
  }
}

const columns = [
  { title: 'To Do', id: 'todo'},
  { title: 'In Progress', id: 'inprogress'},
  { title: 'Done', id: 'done'},
]

document.addEventListener('DOMContentLoaded', () => {
  
  let mainBoard = document.getElementById('kanban-board')
  let addTaskForm = document.getElementById('add-task-form')

  function columnCreator() {
    columns.forEach(element => {
      let div = document.createElement('div')
      div.classList.add('kanban-column')
      let h2 = document.createElement('h2')
      h2.classList.add('column-title')
      h2.textContent = element.title
      let divTaskCard = document.createElement('div')
      divTaskCard.classList.add('task-cards')
      divTaskCard.dataset.id = element.id
      div.append(h2, divTaskCard)
      mainBoard.appendChild(div)
    })
  }

  addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let taskValue = document.getElementById('task-input').value
    if (taskValue) {
      let taskObject = {
        id: Date.now(),
        content: taskValue,
        status: 'todo'
      }
      tasks.push(taskObject)
      renderTasks()
      saveTasks()
      addTaskForm.reset()
    }
  })

  mainBoard.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
      let parent = e.target.closest('.task-card')
      let id = parent.dataset.taskId
      tasks = tasks.filter(taskObj => taskObj.id !== Number(id))
      renderTasks()
      saveTasks()
      console.log(parent)
    }
  })


  mainBoard.addEventListener('dragstart', (e) => {
    if (e.target.classList.contains('task-card')) {
      // e.target.classList.add('dragging');
      e.dataTransfer.setData('text/plain', e.target.dataset.taskId)
    }
  })

  mainBoard.addEventListener('dragover', (e) => {
    e.preventDefault()
  })

  mainBoard.addEventListener('drop', (e) => {
    e.preventDefault()
    let id = event.dataTransfer.getData('text/plain')
    let kanbanColumn = e.target.closest('.kanban-column')
    if (!kanbanColumn) return; 

    let columnTaskContainer = kanbanColumn.querySelector('.task-cards')
    let status = columnTaskContainer.dataset.id
    let currentTask = tasks.find(taskObj => taskObj.id === Number(id))
    currentTask.status = status
    renderTasks()
    saveTasks()
  })

   mainBoard.addEventListener('dragend', (e) => {
      if (e.target.classList.contains('task-card')) {
        e.target.classList.remove('dragging'); // Clean up the class
      }
    });


  //initialize empty board
  columnCreator()
  loadTasks()
  renderTasks()
})
