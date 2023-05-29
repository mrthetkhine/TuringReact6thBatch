class MyThread extends Thread 
{
    String name;
    MyThread(String name)
    {
        this.name = name;
    }
   public void run()
   {
    for(int i=0;i< 20;i++)
    {
        System.out.println("Thread "+this.name + " i = "+i);
    }
   }
    
}
public class MultiThread
{
    public static void main(String[]args)
    {
        MyThread t1 = new MyThread("One");
        MyThread t2 = new MyThread("Two");
        MyThread t3 = new MyThread("Three");

        t1.start();
        t2.start();
        t3.start();
    }
}