import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import Todo from "@/lib/redux/slices/todoSlice/Todo";

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
export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers: {
        addTodo:()=>{

        }
    }
});