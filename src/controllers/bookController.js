const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

const createBooks= async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publisher
    if (!authorId)
    {
     return  res.send( {msg: "Id is required"} )
    }
    let author = await authorModel.findById(authorId)
    if (!author)
     {
        return res.send('Not Valid authorId')
    }
    if (!publisherId)
    {
        return  res.send( {msg: "publisherId is required"})
    }
    let publisher = await publisherModel.findById(publisherId)
    if (!publisher) 
    return  res.send('publisherId is invalid')
        let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooks= async function (req, res) {
    let books = await bookModel.find().populate('author publisher')
    res.send({data: books})
}

const books = async function (req, res) {
    let findPublisher = await publisherModel.find({$or:[{name:"Penguin"},{name:'HarperCollins'}]}).select({_id:1})
    let updatedBook= await bookModel.find({"publisherId":findPublisher}).updateMany({$set:{ isHardCover:true}})
    let findRating = await authorModel.find({rating :{$gt:2.5}}).select({_id:1})
    let updatePrice = await bookModel.find({"authorId":findRating}).updateMany({$inc:{price:10}})
 
    res.send({msg1:updatedBook,msg2:updatePrice})
 
 }






module.exports.createBooks= createBooks
module.exports.getBooks= getBooks
module.exports.books = books
