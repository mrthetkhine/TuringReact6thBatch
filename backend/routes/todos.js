var express = require('express');
var router = express.Router();
let todos =[

        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
        },
        {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
        },
        {
            "userId": 1,
            "id": 6,
            "title": "qui ullam ratione quibusdam voluptatem quia omnis",
            "completed": false
        },
];
router.get('/',(req,res,next)=>{
    console.log('todos /');
    res.json(todos);
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
module.exports = router;