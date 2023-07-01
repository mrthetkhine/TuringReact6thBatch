var express = require('express');
const path = require('path');
const todos = require("../controller/TodoController");
var router = express.Router();


router.get('/',todos.getAllTodos);
router.get('/completed',todos.getAllCompletedToDos);
router.get('/:id',todos.getTodoById);
router.post('/',todos.createTodo);
router.put('/:id',todos.updateTodo);
router.delete('/:id',todos.deleteTodo);
/*
router.get('/download',(req,res,next)=>{
    res.download('./public/data.txt');
});
router.get('/link',(req,res,next)=>{
    res.links({
        next: 'http://api.example.com/users?page=2',
        last: 'http://api.example.com/users?page=5'
    })
    res.end();
});
router.get('/location',(req,res,next)=>{
    res.location('http://example.com');
    res.json({
        message : 'location in  header'
    });
    res.end();
});
router.get('/admin',(req,res,next)=>{
    res.redirect('./../../');
});
router.get('/end',(req,res,next)=>{
    res.send('end method');
    res.end();
});
router.get('/custom-header',(req,res,next)=>{
    res.set('Content-Type','text/html');
    res.set('Custom','Some-value');
    res.send('<h1>Hello</h1>');

});
router.get('/send',(req,res,next)=>{
    var options = {
        root: path.join(__dirname, 'public'),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }
    res.sendFile('./../data.txt',options,(err)=>{
        console.log(err);
        if(err)next();
    });
});
router.get('/:todoId',(req,res,next)=>{
    console.log('todos / ',req.params);
    let todoId = req.params['todoId'];
    let todo = todos.find((todo)=>todo.id==todoId );
    res.json(todo);
});
router.get('/example/b', (req, res, next) => {
    console.log('the response will be sent by the next function ...')
    next();
});
router.get('/example/b', (req, res, next) => {
    console.log('Another route ...');
    res.send('Hello from B!');
});

 */
module.exports = router;