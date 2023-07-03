export default function Greet({message="Hello World",label="Something"})
{
    return (<div>
        {message}
        <div>
            {label}
        </div>
        <br/>
    </div>);
}