"use client";
import RenderContainer from "./RenderContainer";

export default function RenderPropertyDemo()
{
    return <RenderContainer
            mouse={(position)=>
                <h2>Mouse position x {position.x} y {position.y}</h2>}/>
}