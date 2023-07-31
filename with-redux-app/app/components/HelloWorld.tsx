export default function HelloWorld(prop:{message:string})
{

    return (<div>
        Hello World
        {
            prop.message.toUpperCase()
        }
    </div>);
}