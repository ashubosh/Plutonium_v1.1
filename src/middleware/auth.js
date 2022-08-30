const jwt = require("jsonwebtoken");
//Authentication
const tokenverify = async function (req, res, next) {
    let token = req.headers["x-auth-token"]
    //If no token is present in the request header return error. This means the user is not logged in.
    if (!token)
        return res.send({ status: false, msg: "token must be present" });

    let decodedToken = jwt.verify(token, "My Name is Ashutosh Kumar Singh of plutonium batch in FunctionUp")
    if (!decodedToken) return res.send({ status: false, message: "invalid token" });

    req.userId = decodedToken.userId  //Set an attribute in request object 
    next();
};

const checkUser = async function(req,res,next){
    //Authorisation
    let verfiyuserID = req.userId
    let userId = req.params.userId;
    if (verfiyuserID !== userId) return res.send({ status: false, msg: "User logged is not allowed to modify the requested users data" })
    
    next()
    }
    
module.exports.tokenverify = tokenverify
module.exports.checkUser = checkUser


