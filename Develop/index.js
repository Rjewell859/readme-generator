// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer')


const fileLocation = '../rEADME.md'

const questions = [{
        type: 'input',
        name: 'title',
        message: 'What is your projects name?',
    },
    {
        type: 'input',
        message: 'Enter a description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps for installation?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Requirements for usage?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are your contribution guidelines?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Select a license',
        name: 'license',
        choices: ['Apache', 'BSD', 'MIT', 'GNU', 'MPL'],
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
];

// 
// 
// 
// 
// 

// TODO: Create a function to write README file

var writeToFile = function (content) {

    content = JSON.parse(content)
    var badge = ''
    switch (content.license) {
        case 'Apache':
            badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            break;
        case 'BSD':
            badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
            break;
        case 'MIT':
            badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            break;
        case 'GNU':
            badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
            break;
        case 'MPL':
            badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
        default:
            return;
    }


    var readmeGen = `# ${content.title} 
    
## Table of Content
[Description](#description)
[Installation](#installation)    
[Usage](#usage)
[Contributions](#contributions)
[Test](#test-instructions)
[License](#license)
[Questions](#questions)

${badge}

## Description

${content.description} 

## Installation

${content.installation}

### Usage

${content.usage}
    
### Contributions

${content.contribution}

### Test Instructions

${content.test}

#### License

This application is covered under ${content.license}

#### Questions

See my repositories at [Github Profile](https://github.com/${content.github})

Email me with additional questions at ${content.email}
`

    fs.writeFile(fileLocation, readmeGen, err => {
        if (err) {
            console.error(err);
        }
        else {
            console.log("README.md successfully created!")
        }
    });
}

var askQuestions = function () {
    inquirer
        .prompt(questions)
        .then((data) =>
            writeToFile(JSON.stringify(data))
        )
}

// TODO: Create a function to initialize app
function init() {
    askQuestions()
}

// Function call to initialize app
init();