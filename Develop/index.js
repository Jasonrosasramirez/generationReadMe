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
        type: "list", // A list here will come out as a string. Using checklist will output results as an array
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


// Writes the README file. 
function writeToFile(fileName, template) {

  //fs.writeFile(fileName, data, [encoding], [callback])
    fs.writeFile(fileName, template, function (err) {
        // file = (string) | filepath to file 
        // data = (string or buffer) | what you will write into the file
        // encoding = (optional string) | utf8 is assumed if no encoding provided
        // callback = (function (err)) | This function

        console.log(fileName); 
        console.log(template);

        if (err) {
            return console.log(err); 
        } else {
            console.log("success");
        }

        // source below
        // https://nodejs.org/en/knowledge/file-system/how-to-write-files-in-nodejs/
    })

} // write to file complete. 


function init() {
    // this brings it all together. 

    inquirer 
    .prompt(questions) // prompts the array of questions on the terminal
    .then((answer) => { // a promise made here. Answers access the hash where the name is stored. 
        
        // debugger
        console.log("\n" + answer.title); // prints out what the title is. Access the hash using answer. 
        console.log(answer.description);

        var readme = generateMarkdown(answer); // represents the template within the generateMarkdown.js script as a variable. The answer hash is then used as the data parameter
        console.log(readme); // prints the variable. What is represented here, will be printed on the readme file. 
        writeToFile("./generateHere/README.md", readme);  // the desired readme directory - must update the readme itself, what we will write to the actual readme using file system. 

    })

}


// Function call to initialize app
init(); // parameters will be name description, etc.  


// references

// https://nodejs.org/en/knowledge/file-system/how-to-write-files-in-nodejs/
// https://www.npmjs.com/package/inquirer
// https://nodejs.dev/learn/writing-files-with-nodejs

