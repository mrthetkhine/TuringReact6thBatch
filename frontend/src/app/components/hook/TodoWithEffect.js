"use client";
import {useEffect, useState} from "react";

function useFetch(url,callback)
{
    useEffect(()=>{
        fetch(url)
            .then(data=>data.json())
            .then(json=>callback(json));
    },[]);
}
export default function TodoWithEffect()
{
    let [todos,setTodos] = useState([]);

    useFetch('https://jsonplaceholder.typicode.com/todos',setTodos);
    return (<ol>
        {
            todos.map(todo=><li key={todo.id}>
                {todo.title}
            </li>)
        }
    </ol>);
}