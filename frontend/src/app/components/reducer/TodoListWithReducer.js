'use client';
import {useReducer, useState,useEffect} from "react";
function unique()
{
    let id = 3;
    return function ()
    {
        return id++;
    }
}
const initialState = [
    {
        id : 1,
        title : 'To do 1'
    },
    {
        id : 2,
        title : 'To do 2'
    }
];
const nextId = unique();
export function todoReducer(state,action)
{
    switch (action.type)
    {
        case 'ADD_TODO':
            return [...state,action.payload];
        case 'DELETE_TODO':
            return state.filter(todo=>todo.id != action.payload.id);
        case 'UPDATE_TODO':
            return state.map(todo=> todo.id== action.payload.id ?action.payload:todo);
    }
    return state;
}

function TodoItem(props) {
    const {dispatch} = props;
    const {editHandler} = props;
    const deleteHandler = ()=>{
        let deleteAction = createAction('DELETE_TODO',props.todo);
        dispatch(deleteAction);
    }
    const editBtnHandler = ()=>{
      editHandler(props.todo);
    };
    return <div>
        {props.todo.title}
        &nbsp;
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={editBtnHandler}
        >Edit
        </button>
        &nbsp;
        <button type={"button"}
                className={"btn btn-danger"}
                onClick={deleteHandler}>Delete
        </button>
    </div>;
}
function createAction(type,payload)
{
    return {
        type,
        payload
    }
}
function TodoInput({dispatch,editTodo,clearEdit}) {

    console.log('Todo input render ',editTodo);

    const title = editTodo!==null?editTodo.title:'';
    console.log('Title ',title);

    //keep track to update state whenever prop change
    useEffect(()=>{
        if(editTodo)
        {
            setTodoText(editTodo.title);
        }
    },[editTodo]);

    const [todoText,setTodoText] = useState(title);
    console.log('TodoText ',todoText);

    const addHandler = ()=>{
        if(editTodo)
        {
            //Update case
            console.log('Update case');
            const updateToDo = {
                id : editTodo.id,
                title : todoText
            };
            let updateAction = createAction('UPDATE_TODO',updateToDo);
            dispatch(updateAction);
            setTodoText('');
            clearEdit();
        }
        else
        {
            let newId = nextId();
            const newTodo = {
                id : newId,
                title : todoText
            };
            let addTodoAction = createAction('ADD_TODO',newTodo);
            dispatch(addTodoAction);
            setTodoText('');
        }

    };
    return <div>
        <form>
            <div className={"form-group"}>
                <input type={"text"}
                       value ={todoText}
                       onChange={ (event)=> setTodoText(event.target.value)}
                       className={"form-control-sm"}/>
                <button type={"button"}
                        className={"btn btn-primary"}
                        onClick={addHandler}
                >Add
                </button>
            </div>

        </form>
    </div>;
}
function useCustomReducer(reducer,initialState)
{
    const [state,setState] = useState(initialState);
    function dispatch(action)
    {
        //console.log('Action ',action);
        const nextState = reducer(state,action);
        //console.log('NextState ',nextState);
        setState(nextState);
    }
    return [state,dispatch];
}
export default function TodoListWithReducer()
{
    //const [todos,dispatch] = useReducer(todoReducer,initialState);
    const [todos,dispatch] = useCustomReducer(todoReducer,initialState);
    const [editTodo,setEditToDo] = useState(null);

    const editHandler = (todo)=>{
        console.log('Set edit to do ',todo);
        setEditToDo(todo);
    }
    const clearEdit = ()=>{
        setEditToDo(null);
    }

    return (<div>
        <TodoInput dispatch={dispatch}
                   editTodo={...editTodo}
                   clearEdit = {clearEdit}/>
        <div>
            {
                todos.map(todo => <TodoItem key={todo.id}
                                            todo={todo}
                                            editHandler={editHandler}
                                            dispatch={dispatch}/>)
            }
        </div>
    </div>)
}