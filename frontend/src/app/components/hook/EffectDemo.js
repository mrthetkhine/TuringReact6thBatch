"use client";
import {useEffect, useState} from "react";

export default function EffectDemo()
{
    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(count + 1);
    },[]);
    /*
    useEffect(()=>{
        console.log('Effect 1 executed ');
    });
    useEffect(()=>{
        console.log('Effect 2 executed ');
    });

     */
    console.log("Render ");
    return (<div>
        Use effect demo.
    </div>);
}