var express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{
   return res.json({
       message :'Custom route'
   });
});
router.get('/about',(req,res,next)=>{
    return res.json({
        message :'Custom route/about'
    });
});
router.get('/random.text',(req,res,next)=>{
    return res.send('Random');
});
router.get('/ab?cd',(req,res,next)=>{
    return res.send('ab?cd');
});
router.get('/ab+cd',(req,res,next)=>{
    return res.send('ab+cd');
});
router.get('/ab(cd)?e', (req, res) => {
    res.send('ab(cd)?e')
})
router.get('/a/', (req, res) => {
    res.send('/a/')
})
module.exports = router;