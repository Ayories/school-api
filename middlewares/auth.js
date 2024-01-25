const jwt =require("../utils/jwtFn")
//Authentication middleware
const authenticateUser = (req,res,next)=>{
    try {
        const token= req.headers['x-auth'];
        const decodedToken = verifyToken(token);
        if(!decodedToken){
            return req.status(401).json({message: 'unauthorized'});
        }
        const {email,role} = decodedToken;
        console.log(decodedToken)
        req.user = {email,role};
        next();
    } 
    catch (error) {
        res.status(500).json({ message: "Internal server error"})    
    }
    
}
//Authorization middleware
const authorizeuser = (role)=>{
    return (req,res,next)=>{
        const {role} = req.user

    }
}