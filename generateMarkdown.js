// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({ title, description, installation, usage, credits, license, gitHub, email }) => {
 `# ${title}

  ## Description
  ${description}
  
  ## Table of Contents

  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Credits](#Credits)
  - [License](#License)
  
  ## Installation
  ${installation}

  ## Usage
  ${usage}
 
  ## Credits
  ${credits}
  
  ## License
  ${license}

  ## Badges
  
  ## Questions
  Yessenia's GitHub URL: ${gitHub}
  I can be reached via email at ${email}

`;
}

module.exports = generateMarkdown;
