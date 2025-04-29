// Stuff to add:

// HTML
// Prority drop down

// Java Script
// Delete button to delete from list - Add Functionality
// Done checkmark box - Add Functionality
// Figure out how to format task Manage (Spacing bwten variables)

// CSS
// Important tasks must be in red
// Completed tasks must have strike through
// Apply styles based on priority

// Bugs
// HTML not on one line
// The task list updates all tasks values to the newest task
// CSS isn't CSSing




// Gets all the stuff
let taskManage = document.getElementById("taskmanager"); // The Div
let task = document.getElementById("task"); // The text input
let importYN = document.getElementById("checkBox"); // The check box
let button = document.getElementById("subButt"); // thesubmit button

button.addEventListener("click", addTask);

newTask = {}; // Empty object to be filled later

function addTask(){
    // Defines the task
    newTask.name = task.value;
    newTask.priority = "Test";
    newTask.important = "Test";
    newTask.complete = "N";
    newTask.date = "test";

    taskList.push(newTask); // Adds the newTask to the list (at the end)
    taskManage.innerHTML += `<input type="checkbox" class="doneTask">${newTask.name}  Priority:${newTask.priority} Important:${newTask.important} ${newTask.date} <button type="button" class="delete">X</button></br>`; // Adds the task to the div
    console.log(JSON.stringify(taskList)); // Logs a string of the whole list of tasks
};

// The tasks
let taskList = [
    
];