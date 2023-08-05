// create a shape class constructor 
class Shape{
    constructor() 
    {
        this.color = '';
    }
    setColor(color){
        this.color = color;
    }
}
// create a circle class that extends the shape class
    class Circle extends Shape{
        getShape(){
            return `<circle cx="200" cy="200" r="100" fill="${this.color}" />`;
        }
    }
// create a square class that extends the shape class
    class Square extends Shape{
        getShape(){
            return `<rect width="200" height="200" fill="${this.color}" />`;;
        }
    }
// create a triangle class that extends the shape class
    class Triangle extends Shape{
        getShape(){
            return `<polygon points = "150, 18 244, 182 56, 182" fill ="${this.color}">`
        }
    }

// Exports `Triangle`, `Circle`, and `Square` classes
module.exports = {Circle, Square, Triangle};