const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const authMW = require("../middleware/auth")


router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", authMW.tokenverify,authMW.checkUser, userController.getUserData)

router.put("/users/:userId", authMW.tokenverify,authMW.checkUser, userController.updateUser)

router.delete("/users/:userId", authMW.tokenverify,authMW.checkUser, userController.deleteUser)

module.exports = router