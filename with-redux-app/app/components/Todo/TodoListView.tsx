"use client";
import TodoModel from "@/app/components/Todo/TodoModel";

let todos : TodoModel[] = [
    {
        id : '1',
        title: 'Task1',
    },
    {
        id : '2',
        title: 'Task 2'

    }
];
function TodoUI(props:{
                    todo:TodoModel,
                    editHandler :(todo:TodoModel)=>void,
                    deleteHandler :(todo:TodoModel)=>void
                    })
{
    return (<div>
        {props.todo.title}
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={()=>props.editHandler(props.todo)}>Edit</button>
        &nbsp;
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={()=>props.deleteHandler(props.todo)}>
            Delete</button>
    </div>)
}
export default function TodoListView()
{
    const editHandler = (todo:TodoModel)=>{
      console.log('edit todo ',todo);
    };
    const deleteHandler = (todo:TodoModel)=>{
        console.log('Delete todo ',todo);
    }
    return (<div>
        Todolist
        {
            todos.map((todo,index)=>
                    <TodoUI
                        key={todo.id}
                        editHandler = {editHandler}
                        deleteHandler = {deleteHandler}
                        todo={todo}/>)

        }
    </div>);
}