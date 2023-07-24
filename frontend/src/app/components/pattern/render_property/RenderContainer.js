"use client";
import {useState} from "react";

export default function RenderContainer({mouse})
{
    const mouseMoveHandler = (event)=>{
        //console.log("x ", event.clientX, " y",event.clientY)
        setPosition({
            x : event.clientX,
            y : event.clientY
        })
    }
    let [position,setPosition] = useState({
        x : 0,
        y : 0
    })
    return (<div style={{ height: '100vh' }}
                 onMouseMove={mouseMoveHandler}>
        Render container  {mouse(position)}

    </div>);
}