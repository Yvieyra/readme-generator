// TODO: Include packages needed for this application
const inquirer = require('inquirer') // inquirer is a NPM package that allows user input, allowing questions and answers through the terminal. 
const generateMarkdown = require('./generateMarkdown'); //path to generateMarkdown.js to to be able to use "generateMarkdown" that has stored variables/methods
const fs = require('fs'); // The 'fs" module allows us to interact wtih the file system 

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide your project description explaining motivation, what problem it solves, and what you learned?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do users use your project? What are the steps to installation?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions on how to use your project and provide examples via screenshots.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please create your list of your collaborators/third party assets and provide the necessary links to each.',
    },
    {
        type: 'list', 
        name: 'license',
        message: 'Please select the license for your project.',
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'Mozilla Public License 2.0', 'Boost Software License']
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Please proivde your GitHub URL',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please proivde your email address',
    },
]
function init() {
    inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);

    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md file!')
    );
  });
};

init();
