'use client'

/* Core */
import { useState } from 'react'

/* Instruments */
import {
    todoSlice,
    useSelector,
    useDispatch,
    selectTodo, selectCount,

} from '@/lib/redux';

export default function TodoWithRedux()
{
    const todos = useSelector(selectTodo);
    return (<div>

        {
            todos.map( todo=> <div key={todo!.id}>
                    {todo!.title}
                </div>
            )
        }
    </div>)
}