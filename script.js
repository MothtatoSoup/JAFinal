// Java Script
// Done button functionality
// Delete button to delete from list - Add Functionality
// Figure out how to format task Manage (Spacing bwten variables)

// CSS
// Important tasks must be in red
// Completed tasks must have strike through
// Apply styles based on priority

// Bugs
// HTML not on one line
// The task list overwrites all tasks values to the newest task
// CSS isn't CSSing
//      It doesn't want {} but then it wants {}


// I can't get the individual tasks because the list keeps overwriting (No done, delte or specific styling)
// I can't stop it from overwrting because it doesn't work then
// I can't even do css because my browser doesn't recognize it as css


try{
// Gets all the stuff
let taskManage = document.getElementById("taskmanager"); // The Div
let task = document.getElementById("task"); // The text input
let importYN = document.getElementById("checkbox"); // The check box
let button = document.getElementById("subButt"); // thesubmit button
let priority = document.getElementById("priorities") // the priorities things
let isImport = 0
let x = 0;

// The tasks
let taskList = [];
let newTask = {}

button.addEventListener("click", addTask);

function addTask(){
    if (task.value == ""){ // Checks if the input is empty
        window.alert("Invalid Task, Can't be empty")
    }else{
        if(importYN.checked){ // checks if important
            isImport = "Y"
        }else{
            isImport = "N"
        }
    
        // Defines the task
        newTask.id = x += 1;
        newTask.name = task.value;
        newTask.priority = priority.value;
        newTask.important = isImport
        newTask.complete = "N";
        newTask.date = "test";
        
        taskList.push(newTask) // adds task to back of list
        // Appends the task and stuff to the dive
        taskManage.innerHTML += `<input type="checkbox" id="doneTask${newTask.id}">${newTask.id} ${newTask.name}  Priority:${newTask.priority} Important:${newTask.important} ${newTask.date} <button type="button" class="delete">X</button></br>`; // Adds the task to the div
        console.log(JSON.stringify(taskList)); // Logs a string of the whole list of tasks
    }
};



// let done = document.getElementByClassName(`doneTask${newTask.id}`) 
// done.addEventListener("click", function(){ // Not working
//     if(done.checked){ 
//         console.log("checked")
//     }
// })


}catch(error){
    console.log(error)
}
