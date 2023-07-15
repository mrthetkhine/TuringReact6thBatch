"use client";
import {useContext, useState} from 'react';
import {ThemeContext} from "./ThemeContext";
function Child2()
{
    const theme = useContext(ThemeContext);
    console.log('Theme ',theme);
    return (<div>
        Child 2
    </div>);
}
function Child1()
{
    return (<div>
        Child 1
        <Child2/>
    </div>);
}
export default function ContextDemo()
{

    const [color,setColor] = useState('red');
    let theme = {
        color : color
    }
    const btnChangeHandler = ()=>{
        setColor('green');
    }
    return (<div>
        <ThemeContext.Provider value={theme}>
            Context Demo
            <Child1></Child1>
            <button type={"button"} onClick={btnChangeHandler}>Change</button>
        </ThemeContext.Provider>

    </div>);
}