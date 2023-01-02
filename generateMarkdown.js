
// TODO: Create a function to generate markdown for README
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
 ${license}
  
 This application is covered by the ${answers.license} license. 

  ## Badges
  
  ## Questions
  Yessenia's GitHub URL: ${answers.gitHub}

  I can be reached via email at ${answers.email}
`
};

module.exports = generateMarkdown;
