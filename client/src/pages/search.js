import React, { Component } from "react";
import Card from "../components/Cards/search.cards.index";
import Navbar from "../components/navbar/navbar.index"
import Header from "../components/header/header.index";
import API from "../utils/API";
import { List } from "../components/List/list.index";
import Book from "../components/Book/book.index";
import Form from "../components/Form/form.index";


class Home extends Component {
  state = {
    books: [],
    query: "",
    message: "Search For A Book To Begin!"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getBooks = () => {
    API.getBooks(this.state.query)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    })
    .then(() => this.getBooks());
  };

  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Header/> 
          
        <Form
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          query={this.state.query}
        />
       
      
        <Card title="Results">
          {this.state.books.length ? (
            //TODO: bind this to get rid of the need for List tag
            <List>
              {this.state.books.map(book => (
                
                <Book
                  key={book.id}
                  title={book.volumeInfo.title}
                  link={book.volumeInfo.infoLink}
                  authors={book.volumeInfo.authors.join(", ")}
                  description={book.volumeInfo.description}
                  image={book.volumeInfo.imageLinks.thumbnail}
                  Button={() => (
                    <a className="btn-floating btn-large waves-effect waves-light red">
                      onClick={() => this.handleBookSave(book.id)}
                    <i className="material-icons">Save</i>
                    </a>
                  )}
                />
                
              ))}
            </List>
          ) : (
            <h2 className="text-center">{this.state.message}</h2>
          )
          }
        </Card>
      </React.Fragment>
    )
  }
};

export default Home;