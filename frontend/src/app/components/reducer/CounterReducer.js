"use client";
import {useReducer} from "react";

function counterReducer(state,action)
{
    switch (action.type)
    {
        case "inc":
            return { counter : state.counter+1};
        case "dec":
            return { counter : state.counter-1};
    }
    return state;
}
const initialState = {
    counter : 0
}
function createAction(type)
{
    return {
        type
    }
}
export default function CounterReducer()
{
    const [state,dispatch] = useReducer(counterReducer,initialState);
    console.log('State ',state);

    const incHandler = ()=>{
        dispatch(createAction('inc'));
    };
    const decHandler = ()=>{
        dispatch(createAction('dec'));
    }
    return (<div>
        <button type={"button"} onClick={incHandler}>+</button>
        Counter {state.counter}
        <button type={"button"} onClick={decHandler}>-</button>
    </div>);
}