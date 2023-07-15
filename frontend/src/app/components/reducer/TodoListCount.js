import {useContext} from "react";
import {TodoContext} from "../context/TodoContext";

export default function TodoListCount()
{
    const todos = useContext(TodoContext);
    return (<div>
        List count {todos.length}
    </div>);
}