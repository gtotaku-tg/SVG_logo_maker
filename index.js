// import modules
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes.js');

// create a function that writes the file
function writeToFile(fileName, answers) {
    // create a switch statement that checks the shape the user wants to create
    switch (answers.shape) {
        // if the user chooses circle, create a new circle object
        case 'Circle':
            const circle = new Circle(answers.height, answers.width, answers.color, answers.textcolor);
            // write the file to the file system
            fs.writeFile(fileName, circle.create(), (err) =>
                err ? console.log(err) : console.log('Success!')
            );
            break;
        // if the user chooses triangle, create a new triangle object
        case 'Triangle':
            const triangle = new Triangle(answers.height, answers.width, answers.color, answers.textcolor);
            // write the file to the file system
            fs.writeFile(fileName, triangle.create(), (err) =>
                err ? console.log(err) : console.log('Success!')
            );
            break;
        // if the user chooses square, create a new square object
        case 'Square':
            const square = new Square(answers.height, answers.width, answers.color, answers.textcolor);
            // write the file to the file system
            fs.writeFile(fileName, square.create(), (err) =>
                err ? console.log(err) : console.log('Success!')
            );
            break;
        default:
            console.log('Please choose a shape');
    }
}



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
                console.log('Please enter a name or enter no more than 3 characters');
                promptShape();
            }else{
            writeToFile('./examples/logo.svg', answers);
            }
        }
    )
}

    promptShape();