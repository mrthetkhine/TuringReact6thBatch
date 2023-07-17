"use client";
import {useRef} from "react";

export default function ControlDOM()
{
    const myRef = useRef(null);
    const btnFocusHandler = ()=>{
      console.log("Focus ",myRef.current);
      myRef.current.focus();
    };
    return (<div>
        Control DOM
        <input
            ref={myRef}
            type={"text"} className={"form-control"}/>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={btnFocusHandler}>Focus</button>
    </div>)
}