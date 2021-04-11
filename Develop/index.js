// TODO: Include packages needed for this application

const fs = require("fs"); // Allows work with the file system. Can Read, create, update, delete, rename files. 
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown"); // links to the generatemarkdown.js file


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


function init() {
    inquirer 
    .prompt(questions) // prompts the array of questions
    .then(answer => {
        console.log(answer.title);
        
        //writeToFile(answer.title, );
        //call the write to file here
    })

}

// generateMarkdown(); bring me back in later :D 


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //call the markdownMarkdown()
}


// Function call to initialize app
init(); // parameters will be name description, etc.  


// references

// https://nodejs.org/en/knowledge/file-system/how-to-write-files-in-nodejs/
// https://www.npmjs.com/package/inquirer
// https://nodejs.dev/learn/writing-files-with-nodejs


/*

.then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('readMe.md', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );

*/



