import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import Todo from "@/lib/redux/slices/todoSlice/Todo";
import {loadAllTodo} from "@/lib/redux/slices/todoSlice/thunks";
import {stat} from "fs";

;

export interface TodoSliceState {
    todos:Todo[],
}
const initialState : TodoSliceState = {
    todos:[
        {
            id : '1',
            title : 'Task 1 Updated',
            completed : false
        },
        {
            id : '2',
            title : 'Task 2',
            completed : false
        },
    ]
}
//console.log('loadAllTodo ',loadAllTodo);
export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers: {
        addTodo:(state,action:PayloadAction<Todo>)=>{
            state.todos.push(action.payload);
        },
        deleteTodo:(state,action:PayloadAction<Todo>)=> {
            state.todos = state.todos.filter(todo=> todo.id != action.payload.id);
        },
        updateTodo:(state,action:PayloadAction<Todo>)=> {
            state.todos = state.todos.map(todo=> todo.id == action.payload.id?
                                                action.payload: todo);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadAllTodo.pending, (state,action) => {
                console.log('Extra reducer Payload ',action.payload);

            })
            .addCase(loadAllTodo.fulfilled, (state,action) => {
                console.log('Extra reducer fullfilled ',action.payload);
                state.todos = action.payload;
            });

    },
});