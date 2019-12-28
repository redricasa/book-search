import React from "react";

// TODO add rest of grey items to card 
function Book({ title, authors, link, description, image, Button }) {
    return (
        <div className="row">
            <div className="col s12">
                <div className="card light-blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{title}</span>
                        {/* import children from app.js for description */}
                        <p>{description}</p>
                    </div>
                    <div className="card-action">
                        // view botton
                        <a className="btn-floating btn-large waves-effect waves-light red" href={link}><i className="material-icons">visibility</i></a>   
                        {Button}             
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Book;