const errorHandle = (req,err,res,next) =>{
    if (err){
        res.json({
            error:err,
            status:404
        })

    }
    else{
        next();
    }
}
module.exports = errorHandle;