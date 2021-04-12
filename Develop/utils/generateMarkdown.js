
// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {

  if (license == "MIT") {
    return ("![License: MIT] (https://img.shields.io/badge/License-MIT-yellow.svg)"); // references the image of the license badge
  } 
  else if (license == "Apache") {
    return ("![License: MIT] (https://img.shields.io/badge/License-Apache%202.0-blue.svg)");
  }
  else if (license == "GPLv2") { 
    return ("![License:GPLv2] (https://img.shields.io/badge/License-GPL%20v2-blue.svg)");
  } else { 
    return (""); // If there is no license, return an empty string
  }

}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {

  if (license == "MIT") {
    return ("[MIT License] (https://www.opensource.org/licenses/MIT)");
  }
  else if (license == "Apache") {
    return ("[Apache License] (https://www.opensource.org/licenses/Apache-2.0)")
  }
  else if (license == "GPLv2") {
    return ("[GPLv2 License] (https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)");
  } else {
    return (""); // If there is no license, return an empty string
  }
  
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  
  var lincenseLink = renderLicenseLink(license); // the license entered in by the user stored as a variable to the HTML link

  if (lincenseLink == "MIT" || "Apache" || "GPLv2") { 
    return ("License under the " + lincenseLink); 
  } else { 
    return (""); // If there is no license, return an empty string 
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  // interpolates whatever is in this directly into a string. 
  // Everything within the return is what is actually written to the readme file. 
  return `# ${data.title} 

  ${renderLicenseBadge(data.license)} 

  ## Table of Contents

  * [Description](##Description)
  * [Installation](##installation)
  * [Usage](##Usage)
  * [Contributing](##Contributing)
  * [Tests](##Tests)
  * [Questions](##Questions)
  * [Lisense](##Lisence)

  ## Description
  ${data.description}

  ## License
  ${renderLicenseSection(data.license)}



`; 

}


module.exports = generateMarkdown; // functions must always be exported before working in other scripts. In this case, the other three functions will be called within markdown. 
// so the generate generateMarkdown actually carries over the readme template to the Index.js file so it can be written. 