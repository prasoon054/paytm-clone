const jwt = require("jsonwebtoken");
const JWT_SECRET = require("./config");
const authMiddleware = function(req, res, next){
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        res.status(403).json({});
    }
    const token = authHeader.split(' ')[1];
    try{
        const decoded =jwt.verify(token, JWT_SECRET);
        // console.log(decoded);
        if(decoded.userId){
            req.userId = decoded.userId;
            next();
        }
        else{
            return res.status(403).json({});
        }
    }
    catch(err){
        // console.log(err);
        return res.status(403).json({});
    }
}
module.exports = {
    authMiddleware
}
