function log(req,res,next)
{
    console.log('Logger 1 ',req.path);
    next();
}
function auth(req,res,next)
{
    /*
    req.user = {
        id : -1,
        name : "Dummy"
    }*/
    console.log('Logger 2 ',req.path);
    if(req.path.startsWith('/admin'))
    {
        res.status(401).json({
            message : 'Unauthorized'
        });
    }
    else
    {
        next();
    }

}
module.exports = {
    log,
    auth,
};
