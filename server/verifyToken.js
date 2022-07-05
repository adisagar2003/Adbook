const jwt = require('jsonwebtoken');
const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    if (!token){
        res.send({
            error:"You are not authenticated"
        })
    }
    jwt.verify(token,process.env.JWT,(err,user)=>{
        if (err) res.json({error:"Not authenticated"});
        req.user = user;
        next()
    })

}

module.exports = verifyToken;