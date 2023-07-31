class Shape
{
    draw()
    {
        console.log('Shape draw');
    }
}
class Circle extends Shape
{
    draw() {
        console.log('Circle draw');
    }
}
class Rectangle extends Shape
{
    draw() {
        console.log('Rectangle draw');
    }
}
let shape: Shape = new Rectangle();
shape.draw();

shape = new Circle();
shape.draw();