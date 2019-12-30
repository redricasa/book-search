
import React from "react";

function SearchCard(props){
    console.log(props)
    return(
        <div className="row">
            <div className="col s12">
                <div className="card light-blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{props.title}</span>
                        
                        <p>{props.description}</p>
                    </div>
                    <div className="card-action">
                        
                        <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">visibility</i></a>
                        
                        <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default SearchCard;
