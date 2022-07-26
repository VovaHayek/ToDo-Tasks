let tasks = {};
let completedTasks = {};

function markAsCompleted(task){
    completedTasks[task] = task;
    delete tasks[task];
    displayTasks(tasks);
}

function deleteTask(task) {
    delete tasks[task];
    displayTasks(tasks);
}

let displayTasks = function(tasks) {
    let tasksDiv = document.getElementById('allTasks');
    tasksDiv.innerHTML = '';
    for (var task in tasks) {
        tasksDiv.innerHTML += '<div class="task"><h2 class="task-text" id="taskText">' + task + '</h2> <button class="completed-task" onclick="markAsCompleted(document.getElementById(\'taskText\').innerHTML)">&#10004;</button> <button class="delete-task" onclick="deleteTask(document.getElementById(\'taskText\').innerHTML)">&#10006;</button></div>';
    }

    if (completedTasks.length !== 0) {
        document.getElementById('completedTasks').innerHTML = '';
        for (var completed in completedTasks) {
            document.getElementById('completedTasks').innerHTML += '<div class="task completed"><h2 class="completed-task-text" id="taskText">' + completed + '</h2></div>'
        }
    }
}

function createTask(text) {
    if (text !== ''){
        tasks[text] = text;
        document.getElementById('task-input').value = '';
        displayTasks(tasks);
    }
}