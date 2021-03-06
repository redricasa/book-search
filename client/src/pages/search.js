import React, { Component } from "react";
import Header from "../components/header/header.index";
import API from "../utils/API";
import queryToStateHOC from 'react-query-to-state';
import Book from "../components/Book/book.index";
import Form from "../components/Form/form.index";
import { createBrowserHistory } from 'history';

class Home extends Component {
  state = {
    books: [],
    query: "toni morrison",
    message: "Search For A Book To Begin!"
  };
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.getBooks = this.getBooks.bind(this);
    this.handleBookSave = this.handleBookSave.bind(this);
    this.handleInputChange = this.handleBookSave.bind(this);
  };

  handleInputChange = event => {
    // console.log("Event", event)
    // this.setState(
      const { updateQueryState } = this.props
      updateQueryState({searchStr: event.target.value})
    // )
  };

  getBooks = () => {
    API.getBooks(this.state.query)
      .then(res =>{
        console.log("RESPONSE: ---->",res)
          this.setState({
            books: res.data
          })
        }
      )
      .catch(() =>
      // TODO: have a message in case of an empty array
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

  handleFormSubmit = event => {
    console.log(event)
    event.preventDefault();
    this.getBooks();
  };

  handleBookSave = book => {
    
    return ()=> { 
      console.log("saving book: ", book);
      API.saveBook({
        googleId: book.id,
        title: book.volumeInfo.title,
        link: book.volumeInfo.infoLink,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks.thumbnail
      })
      .then(() => this.getBooks())
    }
  };

  render() {
    const { query } = this.props
    const { searchStr } = query
    return (
      <React.Fragment>
       
        <Header/> 
          
        <Form
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <div>
          {this.state.books.length ? (
            this.state.books.map(book => (
              
              <Book
                key={book.id}
                title={book.volumeInfo.title}
                link={book.volumeInfo.infoLink}
                authors={book.volumeInfo.authors.join(", ")}
                description={book.volumeInfo.description}
                image={book.volumeInfo.imageLinks.thumbnail}
                callback={this.handleBookSave(book)}
                icon= "save" 
              />
            ))
            
          ) : (
            <h2 className="text-center">{this.state.message}</h2>
          )
          }
        </div>
      </React.Fragment>
    )
  }
};

const config = {
  initState: {
    searchStr: ''
  },
  isReplace: true,
  history: createBrowserHistory()
}
export default queryToStateHOC(Home, config);