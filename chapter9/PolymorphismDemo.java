class Shape //Parent. Super
{
    public void draw()
    {
        System.out.println("Shape draw");
    }
}
class Circle extends Shape //SubType
{
    public void draw()
    {
        System.out.println("Circle draw");
    }
}
class Rectangle extends Shape
{
    public void draw()
    {
        System.out.println("Rectangle draw");
    }
}
class Another
{
    void draw()
    {
        System.out.println("Another draw");
    }
}
public class PolymorphismDemo
{
    public static void main(String[]args)
    {
        Shape shape = new Circle();
        shape.draw();

        shape = new Rectangle();
        shape.draw();

        //shape = new Another();
    }
}