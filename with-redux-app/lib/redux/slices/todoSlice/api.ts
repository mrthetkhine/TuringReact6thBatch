export const fetchAllTodos = async ()=>{
    const result = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await  result.json();
    return todos;
}