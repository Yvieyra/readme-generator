// TODO: Include packages needed for this application
const markdown = require('./generateMarkdown.js');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title Name',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'Project Description',
        message: 'Provide your project description explaining motivation, what problem it solves, and what you learned?',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'How do users use your project? What are the steps to installation?',
    },
    {
        type: 'input',
        name: 'Usage Information',
        message: 'Please provide instructions on how to use your project and provide examples via screenshots.',
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'Please create your list of your collaborators/third party assets and provide the necessary links to each.',
    },
    {
        type: 'list', //badge needs to get added to the top of the 
        name: 'license',
        message: 'Enter your LinkedIn URL.',
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'Mozilla Public License 2.0', 'Creative Commons Zerov1.0 Universal', 'Boost Software License']
    },
    {
        type: 'input',
        name: 'GitHub URL',
        message: 'Please proivde your GitHub URL',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
