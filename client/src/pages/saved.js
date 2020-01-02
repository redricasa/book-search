import React, { Component } from "react";

import Navbar from "../components/navbar/navbar.index"
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
        API.deleteBook(id).then(res => this.getSavedBooks());
    };
    //TODO stretch goal: add handler to view book and get directed to amazon page to buy book

    render() {
       
        // TODO push cards into an array 
        var Cards = [];
        // loops through the geezNums.json and renders images
        for(let index=0;index< API.length ;index++){
            Cards
            .push(
                // calls the geez function in geez/index.js
                <Book
                    key={API[index]._id}
                    title={API[index].title}
                    link={API[index].link}
                    authors={API[index].authors.join(", ")}
                    description={API[index].description}
                    image={API[index].image}
                    Button={() => (
                        <a className="btn-floating btn-large waves-effect waves-light red">
                            onClick={() => this.handleBookDelete(API[index]._id)}<i className="material-icons">delete</i>
                        </a>
                    )}
                />
            )
        };
        // TODO if there's results, display; if not display "no saved books"

        return (
            <React.Fragment>
                <Navbar/>
                <Header/>
            
                {Cards}
                
            </React.Fragment>
        );
    };
};

export default Saved;