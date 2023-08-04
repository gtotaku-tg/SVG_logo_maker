// import modules
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes.js');


// create a function that prompts the user for the shape they want to create
function promptShape(){
inquirer
    .prompt([
        {
        // prompt logo text input
        type: 'input',
        name:'text',
        message:'What is the logo text?',
        },

        {
        // prompt logo text color input
        type: 'list',
        name:'textcolor',
        message:'What color do you want the text to be?',
        choices: ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'black', 'white']

        },
        {
        // prompt logo background color input
        type: 'list',
        name:'color',
        message:'What color do you want the background to be?',
        choices: ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'black', 'white']
        },
        {
        type: 'list',
        name:'shape',
        choices: ['Circle', 'Triangle', 'Square'],
        message:'What shape do you want to use?'
        },
    ])
        .then((answers) => {
            // validate if the input is empty, also if is less than 3 characters
            if (input.length > 3 || input.length === 0) {
                return 'Please enter a name or enter no more than 3 characters';
            }
            return true;
    
        })
    }

    promptShape();