import axios from "axios";


export default {
  // Gets books from the Google API
  // http://localhost:4000/ points axios to express server instead of react server
  getBooks: function(query) {
    return axios.get("http://localhost:4000/api/google", { params: { q: "intitle:" + query } });
  },
  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("http://localhost:4000/api/books");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("http://localhost:4000/api/books/" + id);
  },
  // Saves an book to the database
  saveBook: function(bookData) {
    return axios.post("http://localhost:4000/api/books", bookData);
  }
};