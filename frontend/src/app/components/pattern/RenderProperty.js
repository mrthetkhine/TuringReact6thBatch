export default function RenderProperty({children})
{
    return(<div>
        Hello
        {
            children()
        }
    </div>)
}