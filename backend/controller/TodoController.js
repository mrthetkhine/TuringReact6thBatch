const todoService = require('./../service/TodoService');
async function getAllTodos(req,res,next)
{

    let todos = await todoService.getAllToDos();
    //console.log('getAlltodos ',todos);
    return res.json(todos);
}
async function  getTodoById(req,res,next)
{
    let todoId = req.params['id'];
    try
    {
        let todo = await todoService.getToDoById(todoId);
        if(!todo)
        {
            res.status(400).json({
                error:'ToDo not found'
            });
        }
        else
        {
            res.json(todo);
        }
    }
    catch(e)
    {
        res.status(400).json({
            error:'ToDo not found'
        });
    }
}
async function getAllCompletedToDos(req, res, next) {
    //console.log('ToDo Routers');
    let todos = await todoService.getAllCompletedToDos();
    //console.log('All todo from db ',todos);
    res.json(todos);
};
async function createTodo(req, res, next) {
    console.log('ToDo Routers post ',req.body);
    try {
        const todo = await todoService.saveTodo(req.body);
        if(!todo) throw Error('Cannot save todo');
        await res.status(201).json(todo);

    }catch(err)
    {
        console.log(err);
        await res.status(400).json({message: err})
    }

}
async function updateTodo(req, res, next) {

    try {
        let todoId = req.params['id'];
        console.log('Id ',todoId, ' todo ',req.body)
        const todo = await todoService.updateTodo(todoId,req.body);
        if(!todo) throw Error('Cannot update todo');
        await res.status(200).json(todo);

    }catch(err)
    {
        console.log(err);
        await res.status(400).json({message: err})
    }

}
async function deleteTodo(req, res, next) {

    try {
        let todoId = req.params['id'];
        console.log('Id ',todoId, ' todo ',req.body)
        const todo = await todoService.deleteTodo(todoId);
        if(!todo) throw Error('Cannot delete todo');
        await res.status(200).json(todo);

    }catch(err)
    {
        console.log(err);
        await res.status(400).json({message: err})
    }

}
module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
    getAllCompletedToDos,
};
