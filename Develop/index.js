// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer')


const fileLocation = '../README.md'

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
        choices: ['Apache', 'BSD', 'MIT', 'GNU', 'GPL'],
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

// TODO: Create a function to write README file

var writeToFile = function (content) {

    content = JSON.parse(content)


    var response = `# ${content.title} 
    
    # Table of Content
    [Description](#description)
    [Installation](#installation)
    [Usage](#usage)
    [Contributions](#contributions)
    [Test](#test-instructions)
    [Licenses](#licenses)
    [Contact](#contact)

    ## Description

     ${content.description} 

    ## Installation

    ${content.installation}

    ## Usage

    ${content.usage}
    
    ## Contributions

    ${content.contribution}

    ## Test Instructions

    ${content.test}

    ## Licenses

    ${content.license}

    ## Contact

    [Github Profile](https://github.com/${content.github})
    ${content.email}
        `


    fs.writeFile(fileLocation, response, err => {
        if (err) {
            console.error(err);
        }
        // file written successfully
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