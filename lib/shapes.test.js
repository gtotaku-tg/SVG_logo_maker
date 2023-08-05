 // Jest tests for shapes
const { Circle, Square, Triangle } = require('./shapes.js');

// Test Circle class
describe('Circle class', () => {
    test('getShape method returns correct SVG for Circle', () => {
        const circle = new Circle();
        circle.setColor('red');

        const expectedSVG = `<circle cx="150" cy="115" r="80" fill="red" />`;
        expect(circle.getShape()).toEqual(expectedSVG);
    });
});


// Test Square class
describe('Square class', () => {
    test('getShape method returns correct SVG for Square', () => {
        const square = new Square();
        square.setColor('blue');

        const expectedSVG = `<rect x="73" y="40" width="160" height="160" fill="blue" />`;
        expect(square.getShape()).toEqual(expectedSVG);
    });
});

// Test Triangle class
describe('Triangle class', () => {
    test('getShape method returns correct SVG for Triangle', () => {
        const triangle = new Triangle();
        triangle.setColor('green');

        const expectedSVG = `<polygon points = "150, 18 244, 182 56, 182" fill ="green">`;
        expect(triangle.getShape()).toEqual(expectedSVG);
    });
});


// example of how to test a method
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');