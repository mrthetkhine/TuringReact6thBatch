'use client'

/* Core */
import {useEffect, useState} from 'react'

/* Instruments */
import {
    todoSlice,
    useSelector,
    useDispatch,
    selectTodo, selectCount, loadAllTodo,

} from '@/lib/redux';
import Todo from "@/lib/redux/slices/todoSlice/Todo";
import {useRouter} from "next/navigation";
let id = 3;
function TodoInput(prop: {
    addTodo: (todo: Todo) => void
})
{
    const [todoInput,setTodoInput] = useState('');
    const btnAddHandler = ()=>{
        console.log('Btn add handler ',todoInput);
        let todo:Todo = {
            id : (id++)+'',
            title : todoInput,
        }
        prop.addTodo(todo);
        setTodoInput('');
    }
    return (<div className={"mb-3"}>
        <div className={"col-auto"}>
            <input type={"text"}
                   className={"form-control"}
                   value={todoInput}
                   onChange={(event => setTodoInput(event.target.value))}
            />
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={btnAddHandler}>
                Add
            </button>
        </div>

    </div>);
}

function TodoUI(props: {
    todo: Todo,
    deleteTodo: (todo: Todo) => void,
    updateTodo: (todo:Todo)=>void,
}) {
    const [editMode,setEditMode] = useState(false);
    const [todoTitle,setTodoTitle] = useState(props.todo.title);

    const router = useRouter();
    const btnDeleteTodoHandler = ()=>{
        console.log('Delete todo  ',props.todo);
        props.deleteTodo(props.todo);
    };
    const btnEditHandler = ()=>{
        setEditMode(!editMode);
        if(editMode)
        {
            console.log('Dispatch update');
            let updateTodo = {
                ...props.todo,
                title: todoTitle
            };
            console.log('Update todo ',updateTodo);
            props.updateTodo(updateTodo);
        }
    }
    const btnDetailHandler =()=>{
        console.log('Btn Detail handler');
        router.push(`/todo/${props.todo.id}`);
    };
    return <div>
        {
            !editMode?props.todo!.title
                        :<input type={"text"}
                                value={todoTitle}
                                onChange={(event)=>setTodoTitle(event.target.value)}/>
        }

        &nbsp;
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={btnEditHandler}>
            {editMode?'Update': 'Edit'}
        </button>
        &nbsp;
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={btnDeleteTodoHandler}>
            Delete
        </button>
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={btnDetailHandler}>
            Details
        </button>
    </div>;
}

export default function TodoWithRedux()
{
    const dispatch = useDispatch();
    const todos = useSelector(selectTodo);
    useEffect(()=>{
        console.log('Call API ');
        dispatch(loadAllTodo())
            .unwrap()
            .then(data=>console.log('Response from thunk ',data));

    },[])

    const addTodoHandler = (todo)=>{
        console.log('Add todo handler ',todo);
        dispatch(todoSlice.actions.addTodo(todo));
    };
    const deleteTodoHandler = (todo:Todo)=>{
        dispatch(todoSlice.actions.deleteTodo(todo));
    }
    const updateToDoHandler = (todo:Todo)=>{
        dispatch(todoSlice.actions.updateTodo(todo));
    };
    return (<div>

        <TodoInput addTodo={addTodoHandler}/>
        {
            todos.map( todo=> <TodoUI
                key={todo!.id}
                todo={todo}
                updateTodo = {updateToDoHandler}
                deleteTodo={deleteTodoHandler}/>
            )
        }
    </div>)
}