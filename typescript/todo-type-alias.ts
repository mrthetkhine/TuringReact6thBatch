type Todo = {
    id :number,
    title : string
};
/*
type Todo = {
    completed : boolean
}
*/
type TodoList = Todo[];

let todos : TodoList = [
    {
        id : 1,
        title : 'Task 1'
    },
    {
        id : 2,
        title : 'Task 2'
    }
]