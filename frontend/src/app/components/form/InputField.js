import dynamic from 'next/dynamic'
export function InputField(props)
{
    return(<input {...props}>

    </input>);
}
//export default dynamic(() => Promise.resolve(InputField), {ssr: false})