"use client";

import {TodoInput} from "./ToDoListWithReducerTwo";

export default function ReuseComponent()
{
    const handler = (todo)=>{
        console.log('todo ');
    }
    return(<div>
        <TodoInput addTodo={handler}/>
    </div>);
}