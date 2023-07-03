function toUpper(msg)
{
    return msg.toUpperCase();
}
export default function Avatar()
{
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara';
    let style = {
        backgroundColor: 'black',
        color: 'pink'
    };
    return(<div>
        <img src={avatar}/>
        Description {toUpper(description)}
        <div style={style}>
            {
                true?'Hello':'World'
            }
        </div>

    </div>);
}