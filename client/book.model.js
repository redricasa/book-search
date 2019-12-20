'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    authors: String,
    description: String,
    image: Buffer,
    link: Buffer
})

module.exports = mongoose.model('Book', BookSchema);