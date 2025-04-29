// Stuff to add:

// HTML
// Prority drop down

// Java Script
// Delete button to delete from list
// Done check mark box

// CSS
// Important tasks must be in red
// Completed tasks must have strike through
// Apply styles based on priority

// Bugs
// The task list updates all tasks values to the newest task




// Gets all the stuff
let taskManage = document.getElementById("taskmanager"); // The Div
let task = document.getElementById("task"); // The text input
let importYN = document.getElementById("checkBox"); // The check box
let button = document.getElementById("subButt"); // thesubmit button

button.addEventListener("click", addTask)

newTask = {} // Empty object to be filled later

function addTask(){
    // Defines the task
    newTask.name = task.value,
    newTask.priority = "Test"
    newTask.important = "Test"
    newTask.complete = "N"
    newTask.date = "test"

    taskList.push(newTask)
    taskManage.innerHTML += `${newTask.name}    Priority:${newTask.priority}  Important:${newTask.important}   ${newTask.date} </br>` // Adds the task to the div
    console.log(JSON.stringify(taskList))
}

// The stuff
let taskList = [
    
]