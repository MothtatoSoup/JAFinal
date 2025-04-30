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
let priority = document.getElementById("priorities")
x = 0;

button.addEventListener("click", addTask(task.value));

// The tasks
let taskList = [
    
];

function addTask(thing){
    thing = {}

    // Defines the task
    thing.id = x += 1;
    thing.name = task.value;
    thing.priority = priority.value;
    thing.important = 
    thing.complete = "N";
    thing.date = "test";

    taskList.push(thing); // can not access task list b4 intit?????
    taskManage.innerHTML += `<input type="checkbox" class="doneTask">${thing.id} ${thing.name}  Priority:${thing.priority} Important:${thing.important} ${thing.date} <button type="button" class="delete">X</button></br>`; // Adds the task to the div
    console.log(JSON.stringify(taskList)); // Logs a string of the whole list of tasks
};