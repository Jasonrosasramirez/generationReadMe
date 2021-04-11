// TODO: Include packages needed for this application

const fs = require("fs"); // Allows work with the file system. Can Read, create, update, delete, rename files. 
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown"); // links to the generatemarkdown.js file


/*

WHEN I enter a description, installation instructions, 
usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled 
Description, Installation, Usage, Contributing, and Tests


WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

WHEN I enter my project title
THEN this is displayed as the title of the README

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

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
        name: "install"
    }, 

    {
        type: "input",
        message: "how are issues reported?", 
        name: "issueReport"
    }, 

    {
        type: "input",
        message: "How can contributions be made?", 
        name: "contributions"
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



