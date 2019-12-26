import React, { Component } from "react";
import Card from "../components/Cards/saved.cards.index";
import Navbar from "../components/navbar/navbar.index"
import Header from "../components/header/header.index";
import API from "../utils/API";
import { List } from "../components/List/list.index";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };
    //TODO stretch goal: add handler to view book and get directed to amazon page to buy book



    render() {
        
        {(this.state.books.length )
            ? 
            (
                // {this.state.books.map(book => (
                    <Book
                        key={book._id}
                        title={book.title}
                        link={book.link}
                        authors={book.authors.join(", ")}
                        description={book.description}
                        image={book.image}
                        Button={() => (
                            <a class="btn-floating btn-large waves-effect waves-light red">
                                onClick={() => this.handleBookDelete(book._id)}<i class="material-icons">delete</i>
                            </a>
                        )}
                    />
                // )
            )
            
            : 
            (
                <h2 className="text-center">No Saved Books</h2>
            )}
        return (
            <React.Fragment>
                <Navbar/>
                <Header/>
                
            </React.Fragment>
        )
    }
}

export default Saved;