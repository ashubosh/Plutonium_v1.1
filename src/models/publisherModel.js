const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema( {
    name: String,
    Headquarter: String
    
}, { timestamps: true });

module.exports = mongoose.model('newPublisher', publisherSchema)
