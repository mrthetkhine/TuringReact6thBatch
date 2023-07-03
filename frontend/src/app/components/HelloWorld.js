export default function HelloWorld()
{
    return (<div>
        <h1>Hell World component</h1>
        <img
            src="https://i.imgur.com/MK3eW3Am.jpg"
            alt="Katherine Johnson"
        />
        <Another/>
    </div>);
}
export function Another()
{
    return (<div>
        Another
    </div>);
}