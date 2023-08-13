import {createAppAsyncThunk} from "@/lib/redux/createAppAsyncThunk";
import {addTodoApi, fetchAllTodos} from "@/lib/redux/slices/todoSlice/api";
import Todo from "@/lib/redux/slices/todoSlice/Todo";

export const loadAllTodo = createAppAsyncThunk(
    'todo/fetchAllTodos',
    async ()=>{
        let todo = await fetchAllTodos();
        return todo;
    }
);

export const addToDo = createAppAsyncThunk(
    'todo/addTodo',
    async(todo:Todo)=>{
        let newTodo = await addTodoApi(todo);
        console.log('Thunk response ',newTodo);
        return newTodo;
    }
)