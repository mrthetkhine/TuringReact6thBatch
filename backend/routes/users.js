var express = require('express');
var router = express.Router();
var users = require('./../controller/UsersController');
/*

router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  console.log('User/ get executed');
  res.json({
    id : 1,
    name: 'Express'
  });
});
router.post('/',(req,res,next)=>{
  console.log('User/ post executed');
  res.json({
    id : 1,
    name: 'Posted method'
  });
});
*/

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

router.get('/:userId', users.getUserById);
router.post('/', users.registerUser);
router.post('/login', users.login);
module.exports = router;


module.exports = router;
