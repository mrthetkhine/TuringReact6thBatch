'use client';
import {useState} from "react";

function unique()
{
    let i=1;
    return function ()
    {
        return i++;
    }
}
export default function ListDynamic()
{
    const nextId = unique();
    const [items,setItems] = useState(['One']);

    const addListHandler = ()=>{
        console.log('Add List');
        //items.push('Item '+ nextId());
        setItems([...items, 'Item '+nextId()]);
    }
    return (<div>
        {
            items.map((item,index)=>
                <div key={index}>{item}</div>)
        }
        <button type={"button"} onClick={addListHandler}> Add </button>
    </div>);
}