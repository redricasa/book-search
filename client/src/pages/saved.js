import React, { Component } from "react";


import Header from "../components/header/header.index";
import API from "../utils/API";
import Book from "../components/Book/book.index";

class Saved extends Component {
    state = {
        books: []
    };
    // bind this
    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.getSavedBooks = this.getSavedBooks.bind(this);
    };
    componentDidMount() {
        this.getSavedBooks();
    };

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
        return function(){
            API.deleteBook(id).then(res => this.getSavedBooks());
        }
    };
    //TODO stretch goal: add handler to view book and get directed to amazon page to buy book

    render() {

        return (
            <React.Fragment>
               
                <Header/>
            
                <div>
                {this.state.books.length ? (
                    this.state.books.map(book => (

                        <Book
                            key={book._id}
                            title={book.title}
                            link={book.link}
                            authors={book.authors.join(", ")}
                            description={book.description}
                            image={book.image}
                            callback={this.handleBookDelete(book._id)}
                            icon= "delete" 
                        />
                    ))

                ) : (
                    <h2 className="text-center">{this.state.message}</h2>
                )
                }
                </div>
                
            </React.Fragment>
        );
    };
};

export default Saved;