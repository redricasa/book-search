import React, { Component } from "react";
import Card from "../components/Cards/search.cards.index";

import Header from "../components/header/header.index";
import API from "../utils/API";

import Book from "../components/Book/book.index";
import Form from "../components/Form/form.index";


class Home extends Component {
  state = {
    books: [],
    query: "harry potter",
    message: "Search For A Book To Begin!"
  };

  handleInputChange = event => {
    console.log(event)
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getBooks = () => {
    API.getBooks(this.state.query)
      .then(res =>{
        console.log(res)
          this.setState({
            books: res.data
          })
        }
      )
      .catch(() =>
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
    
    return function(){ 
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
    return (
      <React.Fragment>
       
        <Header/> 
          
        <Form
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          query={this.state.query}
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
                onSave={this.handleBookSave(book)}
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

export default Home;