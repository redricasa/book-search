import React, { Component } from "react";
import Card from "../components/Cards/search.cards.index";
import Navbar from "../components/navbar/navbar.index"
import Header from "../components/header/header.index";
import API from "../utils/API";
import { List } from "../components/List/list.index";

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
          
        <Card title="Book Search" icon="far fa-book">
          <Form
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            query={this.state.query}
          />
        </Card>
      
        <Card title="Results">
          {this.state.books.length ? (
            <List>
              {this.state.books.map(book => (
                <Book
                  key={book.id}
                  title={book.volumeInfo.title}
                  subtitle={book.volumeInfo.subtitle}
                  link={book.volumeInfo.infoLink}
                  authors={book.volumeInfo.authors.join(", ")}
                  description={book.volumeInfo.description}
                  image={book.volumeInfo.imageLinks.thumbnail}
                  Button={() => (
                    <button
                      onClick={() => this.handleBookSave(book.id)}
                      className="btn btn-primary ml-2"
                    >
                      Save
                    </button>
                  )}
                />
              ))}
            </List>
          ) : (
            <h2 className="text-center">{this.state.message}</h2>
          )}
        </Card>
      </React.Fragment>
    )
  }
}

export default Home;