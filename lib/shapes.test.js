 // Jest tests for shapes
const { Circle, Square, Triangle } = require('./shapes.js');

// Test Circle class
describe('Circle class', () => {
    test('getShape method returns correct SVG for Circle', () => {
        const circle = new Circle();
        circle.setColor('red');

        const expectedSVG = `<circle cx="200" cy="200" r="100" fill="red" />`;
        expect(circle.getShape()).toEqual(expectedSVG);
    });
});


// Test Square class
describe('Square class', () => {
    test('getShape method returns correct SVG for Square', () => {
        const square = new Square();
        square.setColor('blue');

        const expectedSVG = `<rect width="200" height="200" fill="blue" />`;
        expect(square.getShape()).toEqual(expectedSVG);
    });
});

// Test Triangle class
describe('Triangle class', () => {
    test('getShape method returns correct SVG for Triangle', () => {
        const triangle = new Triangle();
        triangle.setColor('green');

        const expectedSVG = `<polygon points = "200, 10 200, 200 400, 10" fill ="green">`;
        expect(triangle.getShape()).toEqual(expectedSVG);
    });
});


// example of how to test a method
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');