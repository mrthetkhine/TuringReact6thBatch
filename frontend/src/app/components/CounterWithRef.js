"use client";
import {useRef, useState} from "react";

export default function CounterWithRef()
{
    console.log('Render CounterWithRef');
    const [something,setSomething] = useState('Nothing');
    let ref = useRef(0);
    /*let ref= {
        current : 0
    }*/
    function handleClick() {
        ref.current = ref.current + 1;
        alert('You clicked ' + ref.current + ' times!');
    }
    const handler2 = ()=>{
      setSomething('Something');
    };

    return (<div>
        Counter with Ref
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={handleClick}>Inc</button>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={handler2}>Set something</button>
    </div>);
}