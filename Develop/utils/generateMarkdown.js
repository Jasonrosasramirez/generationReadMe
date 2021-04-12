
// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  // If there is no license, return an empty string

  if (license == "MIT") {
    return ("![License: MIT] (https://img.shields.io/badge/License-MIT-yellow.svg)"); // references the image of the license badge
  } 
  else if (license == "Apache") {
    return ("![License: MIT] (https://img.shields.io/badge/License-Apache%202.0-blue.svg)");
  }


  // "MIT", "GPLv2", "Apache", "No License"

}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  // If there is no license, return an empty string



}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  // If there is no license, return an empty string



}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}


module.exports = generateMarkdown; // functions must always be exported before working in other scripts. In this case, the other three functions will be called within markdown. 
// function license badge, link, sections are independant functions that will be called in generateMarkdown. 