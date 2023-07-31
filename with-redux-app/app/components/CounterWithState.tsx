"use client";
import {useState} from "react";

export default function CounterWithState()
{
    let [counter,setCounter] = useState(0);
    const incHandler = ()=>{
        setCounter(counter+1);
    }
    const decHandler = ()=>{
        setCounter(counter-1);
    }
    return (<div>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={incHandler}>
            +
        </button>
           <div>{counter}</div>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={decHandler}>
            -
        </button>
    </div>)
}