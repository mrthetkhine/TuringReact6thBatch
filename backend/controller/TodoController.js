const todoService = require('./../service/TodoService');
function getAllTodos(req,res,next)
{
    //console.log('User ',req.user);
    let todos = todoService.getAllTodos();
    return res.json(todos);
}
module.exports = {
    getAllTodos
};
