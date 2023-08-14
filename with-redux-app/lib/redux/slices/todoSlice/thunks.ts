import {createAppAsyncThunk} from "@/lib/redux/createAppAsyncThunk";
import {addTodoApi, deleteTodoApi, fetchAllTodos} from "@/lib/redux/slices/todoSlice/api";
import Todo from "@/lib/redux/slices/todoSlice/Todo";
import {todoSlice} from "@/lib/redux";

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
export const deleteToDo = createAppAsyncThunk(
    'todo/deleteTodo',
    async(todo:Todo,thunkApi)=>{
        let deleteTodo = await deleteTodoApi(todo);
        console.log('Thunk Api ',thunkApi);
        console.log('Thunk response delete todo ',deleteTodo);
        thunkApi.dispatch(todoSlice.actions.deleteTodo(deleteTodo));
        //return thunkApi.rejectWithValue(deleteTodo);
        return deleteTodo;
    }
)