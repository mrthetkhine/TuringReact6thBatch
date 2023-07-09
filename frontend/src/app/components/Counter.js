'use client';
import { useState } from 'react';
export default function Counter()
{
    console.log('Render');
    const [count,setCount] = useState(0);
    const [label,setLabel] = useState('HelloWorld');
    const inc =()=>{
        console.log('Inc');
        setCount(count=>count+1);
        setCount(count=>count+2);
        setCount(count=>count+5);
    }
    const dec =()=>{
        console.log('Dec');
        setCount(count-1);
    }
    const changeLabel = ()=>{
        console.log('Change label');
      setLabel(new String('HelloWorld2'));
    };
    return(<div>
        <button type={"button"} onClick={inc}>+</button>
        {count}
        <button type={"button"} onClick={dec}>-</button>
        {label}
        <button type={"button"} onClick={changeLabel}>Change label</button>
    </div>);
}