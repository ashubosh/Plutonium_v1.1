const { reset } = require('nodemon')
const BookModel = require('../models/bookModel')
const AuthorModel = require('../models/authorModel')


const createBook = async function(req, res){
let bookData = req.body

let book = await BookModel.create(bookData)
res.send({msg: book})

}

const createAuthor = async function(req, res){
    let authorData = req.body
    
    let author = await AuthorModel.create(authorData)
    res.send({msg: author})
    
}
const bookByChetan = async function (req, res){

    let authorDetails = await AuthorModel.findOne({author_name : "Chetan Bhagat"})
    let authorId = authorDetails.author_id
    let chetanBook = await BookModel.find({author_id : authorId}).select({name : 1, _id : 0})
    
    res.send({bookByChetan: chetanBook })

} 

const priceUpdate = async function (req, res){
    let update = req.body
    let bookData = await BookModel.findOneAndUpdate(
        { name : "Two states"}, {$set : update}, {new : true}
    )
    let authorId = bookData.author_id
    
    let author = await AuthorModel.findOne({author_id : authorId}).select({author_name : 1, _id :0})

    res.send({author_name : author.author_name, price : bookData.price  })

    
}
 




module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.bookByChetan = bookByChetan
module.exports.priceUpdate = priceUpdate
