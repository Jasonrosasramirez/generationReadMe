// TODO: Include packages needed for this application

const fs = require("fs"); // Allows work with the file system. Can Read, create, update, delete, rename files. 
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown"); // links to the generatemarkdown.js file


// TODO: Create an array of questions for user input
const questions = [
    // Contains all of the prompts that will be asked. 

    {
        type: "input", // sets the input type to a string user input. 
        message: "What is the App name?", // prompt for the user in the command terminal 
        name: "title" // where the message input is stored as a hash. Can be assessed by referencing answers.
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
    }, 

    {
        type: "list", 
        message: "choose your license", 
        name: "license", 
        choices: ["MIT", "GPLv2", "Apache", "No License"]  
    }, 

    {
        type: "input",
        message: "How is the app installed?", 
        name: "installation"
    }, 

    {
        type: "input",
        message: "What is the usage unformation?", 
        name: "usageInformation"
    }, 

    {
        type: "input",
        message: "How can contributions be made?", 
        name: "contributions"
    }, 
    
    {
        type: "input",
        message: "What is your gitHub username?", 
        name: "questionsGithub"
    }, 

    {
        type: "input",
        message: "What is your email address?", 
        name: "questionsEmail"
    }

]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeToFile(fileName, data, function(err) {
        console.log(fileName); 
        console.log(data);

        if (err) {
            return console.log(err); 
        } else {
            console.log("success");
        }
    })

}


function init() {
    // this brings it all together. 

    inquirer 
    .prompt(questions) // prompts the array of questions on the terminal
    .then(answer => { // a promise made here. 
        console.log(answer.title);

        writeToFile("README.md", generateMarkdown(data));
        console.log(data);
    })

}


// Function call to initialize app
init(); // parameters will be name description, etc.  


// references

// https://nodejs.org/en/knowledge/file-system/how-to-write-files-in-nodejs/
// https://www.npmjs.com/package/inquirer
// https://nodejs.dev/learn/writing-files-with-nodejs

