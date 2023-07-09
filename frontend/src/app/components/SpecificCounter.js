'use client';
import {useState} from "react";

function ChildCounter({initialValue})
{
    console.log('Render Child');
    const [count,setCount] = useState(initialValue);
    const inc = ()=>{
        setCount(count+1)
    };
    return(<div>
        {count}
        <button type={"button"} onClick={inc}>+</button>
    </div>);
}
export default function SpecificCounter()
{
    console.log('Render Parent');
    const [data,setData]= useState(1);
    const handler = ()=>{
        setData(data+1);
    }
    return(<div>
            Data {data}
            <button type={"button"} onClick={handler}>Change Parent</button>
            <ChildCounter initialValue={data}/>

        </div>
    );
}