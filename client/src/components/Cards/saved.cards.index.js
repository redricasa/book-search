
import React from "react";

function SaveCard(props){
    return(
        <div className="row">
            <div className="col s12">
                <div className="card purple darken-3">
                    <div className="card-content white-text">
                        <span className="card-title">{props.title}</span>
                
                        <p>{props.description}</p>
                    </div>
                    <div className="card-action">
                        // delete button
                        <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">delete</i></a>
                        // view botton equivalent to link
                        <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">visibility</i></a>
                    </div>
                </div>
            </div>
        </div>       
    )
};
export default SaveCard;
