import Todo from "@/lib/redux/slices/todoSlice/Todo";

const URL  = 'http://localhost:3000/api/todos';
export const fetchAllTodos = async ()=>{
    const result = await fetch(URL);
    const todos = await  result.json();
    return todos;
}
export const addTodoApi = async(todo:Todo)=>{
    const result = await fetch(URL,{
        method : 'POST',
        body : JSON.stringify(todo)
    });
    const todoJson = await  result.json();
    return todoJson;
};