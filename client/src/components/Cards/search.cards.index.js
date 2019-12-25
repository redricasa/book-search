
import React from "react";

function SearchCard(props){
    return(
        <div className="row">
            <div className="col s12">
                <div className="card light-blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{props.title}</span>
                        {/* import children from app.js for description */}
                        <p>{props.description}</p>
                    </div>
                    <div className="card-action">
                        // view botton
                        <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">visibility</i></a>
                        // save botton
                        <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default SearchCard;
