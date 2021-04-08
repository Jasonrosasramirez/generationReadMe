// TODO: Include packages needed for this application

var fs = require("fs"); // Allows work with the file system. Can Read, create, update, delete, rename files. 


// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is the App name?", 
        name: "static-site"
    }, 

    {
        message: "How will the app be used?", 
        name: "description"
    }, 

    {
        message: "Who is the author?", 
        name: "author"
    }

    /*
        questins to connect with package.json   

        questions below from readme prompt
        "How is the app installed?",
        "How are the issues reported?",
        "How can contributions be made?",
    */
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}




// TODO: Create a function to initialize app
function init() {}



// Function call to initialize app
init(); // parameters will be name description, etc.  
