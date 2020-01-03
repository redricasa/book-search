const axios = require("axios");
const Book = require("../models/book.model");

// Defining methods for the googleController

// findAll searches the Google Books API and returns only the entries we haven't already saved

// It also makes sure that the books returned from the API all contain a title, author, link, description, and image
module.exports = {
  findAll: function(req, res) {
    const { query: params } = req;
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })
      .then(results =>
        {
          var filtered = results.data.items.filter(
            result =>
              {
                // console.log(result.volumeInfo)
                return result.volumeInfo.title &&
                result.volumeInfo.authors &&
                result.volumeInfo.description &&
                result.volumeInfo.imageLinks.thumbnail
              }
          )
          // console.log("filtered: ", filtered)
          return filtered
        }
      )
      .then(apiBooks =>
        Book.find().then(dbBooks =>{
          console.log("database books: ", dbBooks);
            return apiBooks.filter(apiBook =>
              dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
            )
          }
        )
      )
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err));
  }
};