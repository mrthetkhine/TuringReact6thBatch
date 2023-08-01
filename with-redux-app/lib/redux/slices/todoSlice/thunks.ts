import {createAppAsyncThunk} from "@/lib/redux/createAppAsyncThunk";
import {fetchAllTodos} from "@/lib/redux/slices/todoSlice/api";

export const loadAllTodo = createAppAsyncThunk(
    'todo/fetchAllTodos',
    async ()=>{
        let todo = await fetchAllTodos();
        return todo;
    }
);