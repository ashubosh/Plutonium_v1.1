const jwt = require("jsonwebtoken");

const tokenverify = async function (req, res, next) {
    try {
        let token = req.headers["x-auth-token"]

        if (!token)
            return res.status(400).send({ status: false, msg: "token must be present" });

        let decodedToken = jwt.verify(token, "My Name is Ashutosh Kumar Singh of plutonium batch in FunctionUp")
        if (!decodedToken) return res.status(400).send({ status: false, message: "invalid token" });

        req.userId = decodedToken.userId
    } catch (error) {
        res.status(500).send({ msg: "Error", error: error.message })
    }
    next();
};

const checkUser = async function (req, res, next) {
    try {
        let verfiyuserID = req.userId
        let userId = req.params.userId;
        if (verfiyuserID !== userId) return res.status(403).send({ status: false, msg: "User logged is not allowed to modify the requested users data" })
    } catch (error) {
        res.status(500).send({ status: false, error: error.message });
    }
    next()
};

module.exports.tokenverify = tokenverify
module.exports.checkUser = checkUser


