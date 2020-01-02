'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    authors: [String],
    description: String,
    image: String,
    link:{ 
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    googleId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Book', BookSchema);