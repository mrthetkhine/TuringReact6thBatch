import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import Todo from "@/lib/redux/slices/todoSlice/Todo";
import {addToDo, deleteToDo, loadAllTodo} from "@/lib/redux/slices/todoSlice/thunks";

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

function updateToDo<State>(state: State extends PrimitiveType ? State : (State extends AtomicObject ? State : (State extends IfAvailable<ReadonlyMap<infer K, infer V>> ? Map<Draft<K>, Draft<V>> : (State extends IfAvailable<ReadonlySet<infer V>> ? Set<Draft<V>> : (State extends WeakReferences ? State : (State extends object ? WritableDraft<State> : State))))), action: PayloadAction<Todo>) {
    state.todos = state.todos.map(todo => todo.id == action.payload.id ?
        action.payload : todo);
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
            updateToDo(state, action);
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
            })
            .addCase(addToDo.fulfilled, (state,action) => {
                console.log('Extra addToDo reducer fullfilled ',action.payload);
                state.todos.push( action.payload);
            })
            .addCase(deleteToDo.rejected, (state,action) => {
                console.log('Extra delete todo reducer reject ',action.payload);

            })
        ;

    },
});