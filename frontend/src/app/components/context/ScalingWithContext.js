"use client";
import {todoReducer} from "./../reducer/TodoListWithReducer";
import {TodoContext,TodoDispatchContext} from './TodoContext';
import {useReducer} from "react";
import ToDoListWithReducerTwo from "../reducer/ToDoListWithReducerTwo";
import ReuseComponent from "../reducer/ReuseComponent";
import TodoListCount from "../reducer/TodoListCount";
const initialState = [
    {
        id : 1,
        title : 'Todo scaling 1'
    },
    {
        id : 2,
        title : 'To do scaling 2'
    },
];
export default function ScalingWithContext()
{
    const [todos, dispatch] = useReducer(todoReducer, initialState);
    return (<div>

        <TodoContext.Provider value={todos}>
            <TodoDispatchContext.Provider value={dispatch}>
                <ToDoListWithReducerTwo/>
                <TodoListCount/>
            </TodoDispatchContext.Provider>
        </TodoContext.Provider>
    </div>);
}