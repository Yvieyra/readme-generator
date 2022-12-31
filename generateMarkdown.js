apacheLicense = 
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  const licenseBadge = license ? `https://img.shields.io/github/${data.license}` : '';
 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return " ";
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 
  return " ";
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  
  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
 
  ## Credits
  ${data.credits}
  
  ## License
  [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

  ## Badges
  
  ## Questions
  Yessenia's GitHub URL: ${data.gitHub}
  I can be reached via email at ${data.email}
`
};

module.exports = generateMarkdown;
