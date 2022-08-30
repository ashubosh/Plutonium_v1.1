const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  let user = req.body;
  let createdUser = await userModel.create(user);
  res.send({ msg: createdUser });
};

const loginUser = async function (req, res) {
  let emailId = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: emailId, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not correct",
    });

  //Create Token
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "plutonium",
      organisation: "FunctionUp",
      month: "August",
      Training: "online"
    },
    "My Name is Ashutosh Kumar Singh of plutonium batch in FunctionUp"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};

const getUserData = async function (req, res) {
  let userDetails = await userModel.findById(req.userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data:userDetails});
};

const updateUser = async function (req, res) {
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: req.userId }, userData, { new: true });
  res.send({ status: updatedUser });
}

const deleteUser = async function (req, res) {
  let userData = req.body;
  let deleteUser = await userModel.findOneAndUpdate({ _id: req.userId }, userData, { new: true });
  res.send({ status: deleteUser });
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser