'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    authors: [String],
    description: String,
    image: Buffer,
    link: Buffer,
    title: String
})

module.exports = mongoose.model('Book', BookSchema);