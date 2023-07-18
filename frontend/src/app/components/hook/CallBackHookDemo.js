"use client";

import {useCallback, useEffect, useId, useState} from "react";

function Child({handler})
{
    console.log('Child render');
    useEffect(()=>{
        console.log('Handler changed');
    },[handler])
    return (<div onClick={handler}>
        Child
    </div>);
}

export default function CallBackHookDemo()
{

    let [state,setState] = useState('something');
    console.log("Parent render");
    const handler = useCallback( ()=>{
        console.log('handler ');
    },[]);
    const parentClick = ()=>{
        setState(new String('Hello'));
    }
    return (<div onClick={parentClick}>
        Parent {state}
        <Child handler={handler}/>
    </div>);
}