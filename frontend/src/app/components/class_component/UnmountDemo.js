"use client";
import {useState} from "react";
import OldSchoolCounter from "./OldSchoolCounter";

export default function UnmountDemo()
{
    let [toggle,setToggle] = useState(true);

    const btnToggleHandler = ()=>{
        setToggle( !toggle);
    }
    return (<div>
        Unmount demo
        <button
            type={"button"}
            onClick={btnToggleHandler}
            >Toggle</button>
        {
            toggle && <OldSchoolCounter/>
        }
    </div>);
}