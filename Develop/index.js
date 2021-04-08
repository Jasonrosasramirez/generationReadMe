// TODO: Include packages needed for this application

var fs = require("fs"); // Allows work with the file system. Can Read, create, update, delete, rename files. 
var inquirer = require("inquirer");

/*

WHEN I enter a description, installation instructions, 
usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled 
Description, Installation, Usage, Contributing, and Tests

*/



// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input", // sets the input type to a string user input. 
        message: "What is the App name?", // prompt for the user in the command terminal 
        name: "title" // where the message input is stored
    }, 

    {
        type: "input",
        message: "How will the app be used?", 
        name: "description"
    }, 

    {
        type: "input",
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

function init() {
    inquirer 
    .prompt(questions) // prompts the array of questions
    .then(answer => {
        console.log(answer.title);
    })

}



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// Function call to initialize app
init(); // parameters will be name description, etc.  
