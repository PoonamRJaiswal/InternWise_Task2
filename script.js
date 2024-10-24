let taskList = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        const task = {
            text: taskText,
            completed: false
        };
        taskList.push(task);
        taskInput.value = '';
        renderTasks();
    }
}

function renderTasks() {
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = '';

    taskList.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        
        li.innerHTML = `
            <span>${task.text}</span>
            <div>
                <span class="tick-symbol symbol" onclick="toggleComplete(${index})">✔️</span>
                <span class="symbol" onclick="deleteTask(${index})">❌</span>
                <button class="edit-button" onclick="editTask(${index})">Edit</button>
            </div>
        `;
        
        taskListElement.appendChild(li);
    });
}

function toggleComplete(index) {
    taskList[index].completed = !taskList[index].completed;
    renderTasks();
}

function deleteTask(index) {
    taskList.splice(index, 1);
    renderTasks();
}

function editTask(index) {
    const newTaskText = prompt("Edit your task:", taskList[index].text);
    if (newTaskText !== null) {
        taskList[index].text = newTaskText.trim();
        renderTasks();
    }
}
