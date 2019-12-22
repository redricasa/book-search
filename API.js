import key from ".env";
import axios from 'axios';





const searchTerm = // get user entry
const queryUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${key}`;
// use Axios to query responses from Google Books 
axios({
    url: queryUrl, 
    method: "get"
})
// TODO: add a promise .then to get responses in a JSON format and .catch for errors
// .then()
// .catch()