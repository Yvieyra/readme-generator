// TODO: Include packages needed for this application
const inquirer = require('inquirer') // inquirer is a NPM package that allows user input, allowing questions and answers through the terminal. 
const generateMarkdown = require('./generateMarkdown'); //path to generateMarkdown.js to to be able to use "generateMarkdown" that has stored variables/methods
const fs = require('fs'); // The 'fs" module allows us to interact wtih the file system 

//The variables below are of the license badges to be displayed based on user choice. 
const mitLicense = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
const gnuLicense = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
const apacheLicense = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
const mozillaLicense = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
const boostLicense = "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";

//The variabes below are of the license badge links to be displaed based on user choice. 
const mitLink = "https://opensource.org/licenses/MIT";
const gnuLink = "https://www.gnu.org/licenses/gpl-3.0";
const apacheLink = "https://opensource.org/licenses/Apache-2.0";
const mozillaLink = "https://www.mozilla.org/en-US/MPL/2.0/";
const boostLink = "https://www.boost.org/LICENSE_1_0.txt";

// Created an array of questions for user input stored in the variable, questions. 
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
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'Mozilla 2.0', 'Boost Software 1.0']
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
function init() { // function to initialize application 
    inquirer.prompt(questions).then((answers) => { 

        let userChoice = answers.license; // userChoice is the license selected from the choices of licenses. 
        function renderLicenseBadge() { //function inserts the license badge and license link in README.md file based on user choice. 
            if (userChoice === 'MIT') {
                license = mitLicense;
                licenseLink = mitLink;
            } else if (userChoice === 'GNU GPLv3') {
                license = gnuLicense;
                licenseLink = gnuLink;
            } else if (userChoice === 'Apache 2.0') {
                license = apacheLicense;
                licenseLink = apacheLink;
            } else if (userChoice === 'Mozilla 2.0') {
                license = mozillaLicense;
                licenseLink = mozillaLink;
            } else if (userChoice === 'Boost Software 1.0') {
                license = boostLicense;
                licenseLink = boostLink;
            } else {
                license = "";
            }
        };
        renderLicenseBadge(); // A call to the license badge and license link function 
        const readmeContent = generateMarkdown(answers); // passing answers to generate markdown function in the generateMarkdown js file.
        fs.writeFile('README.md', (readmeContent), (err) => //using 'fs' module to create the README.md file, that is taking in three parameters. File path, data, and callback. 
            err ? console.log(err) : console.log('Successfully created README.md file!') //ternary operator
        );
    });
};
init(); // A call to the entire function.

