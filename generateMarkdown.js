
// Created a function to generate markdown for README
function generateMarkdown(answers) {
   return `${license}

  # ${answers.title}

  ## Description
  ${answers.description}
  
  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}
 
  ## Credits
  ${answers.credits}
  
  ## License

 This application is covered by the ${answers.license} license. 
 Link to license: ${licenseLink}

  ## Badges
  ${license}

  ## Questions
  Yessenia's GitHub URL: ${answers.gitHub}

  If you have any questions. I can be reached via email at: ${answers.email}
`
};

module.exports = generateMarkdown; // module.exports, an object used to store variables and methods that can be used on the same application and other js files. 
