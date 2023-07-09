'use client';

function Button({onClick})
{
    return (
        <button onClick={onClick} type="button">Click me</button>
    );

}
export default function CustomButton()
{
    const handler = (event)=>{
      console.log('Button click',event);
    };
    return(<div>
        Custom button
        <Button onClick={handler} />
    </div>);
}