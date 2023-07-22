"use client";
import {useMemo, useState} from "react";

function factorial(num)
{
    console.log('Fact ',num);
    let result = 1;
    for(let i=1; i<=num; i++)
    {
        result *= i;
    }
    return result;
}
export default function MemoHookDemo()
{
    console.log('Render');
    let [input,setInput] = useState("");
    let [num,setNum] = useState(0);

    const fact = useMemo(()=>{
        console.log('Recompute ',num);
        return factorial(num);
    },[num]);
    const btnHandler = ()=>{
        setNum(input);
    };
    return (<div>
        Factorial value {fact}
        <input type={"text"}
               value={input}
               onChange={(e)=> setInput(e.target.value)}/>
        <button type={"button"}
                onClick={btnHandler}>Compute</button>
    </div>)
}