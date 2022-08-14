const UserModels= require("../models/UserModels")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await UserModels.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await UserModels.find()
    res.send({msg: allBooks})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData