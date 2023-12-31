// import modules
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes.js');

// create a function that writes the file
function writeToFile(fileName, answers) {
    let svgString = 
    `
    <svg version="1.1" width="500" height="300" xmlns="http://www.w3.org/2000/svg">
        <g>
            ${answers.shape}
        </g>
    </svg>
    `;
    let shapeChoice;
        if (answers.shape === "Triangle") {
            shapeChoice = new Triangle();
            svgString = `
                <svg version="1.1" width="500" height="300" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <polygon points = "150, 18 244, 182 56, 182" fill="${answers.color}"/>
                        <text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textcolor}">${answers.text}</text>
                    </g>
                </svg>
            `;
        } else if (answers.shape === "Square") {
            shapeChoice = new Square();
            svgString = `
                <svg version="1.1" width="500" height="300" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <rect x="73" y="40" width="200" height="200" fill="${answers.color}"/>
                        <text x="160" y="150" text-anchor="middle" font-size="90" fill="${answers.textcolor}">${answers.text}</text>
                    </g>
                </svg>
            `;
        } else {
            shapeChoice = new Circle();
            svgString = `
                <svg version="1.1" width="500" height="300" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <circle cx="200" cy="200" r="100" fill="${answers.color}"/>
                        <text x="200" y="220" text-anchor="middle" font-size="90" fill="${answers.textcolor}">${answers.text}</text>
                    </g>
                </svg>
            `;
        }
    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
        });
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
            if (answers.text.length > 3 || answers.text.length === 0) {
                console.log('Please enter a name or enter no more than 3 characters');
                promptShape();
            }else{
            writeToFile('./examples/logo.svg', answers);
            }
        }
    )
}

    promptShape();