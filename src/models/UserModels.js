const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
   /* mobile: {
        type: String,
        unique: true,
        required: true
    },*/
    bookCategory: {
        type: String,
        required: true,
        enum: ["drama", "fiction", "horror", "adventure"]
        
    },
    year: Number,
   
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) 



