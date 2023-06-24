var express = require('express');
var router = express.Router();

/* GET users listing. */
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
module.exports = router;
