let x: "hello" = "hello";
x = "hello";

//x = "something";

function display(x : string | null)
{
    if(x == null)
    {
        console.log("x is null");
    }
    else
    {
        console.log(x.toUpperCase());
    }
}
display(null);
display('Hello');