abstract class Shape2
{
    abstract draw():void;
    
}
class Rectangle2 extends Shape2
{
    draw()
    {
        console.log('Rectangle draw');
    }
}
class Circle2 extends Shape2
{
    draw()
    {
        console.log('Circle draw');
    }
}

let shape : Shape2 = new Circle2();
shape.draw();

shape = new Rectangle2();
shape.draw();