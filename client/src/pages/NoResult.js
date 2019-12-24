import React from "react";
// Note: no need for props since the page is meant to be static that appears when the google books API doesn't have any data returning
function NoResult(){
    return(
        <div className="row">
            <div className="col s12">
            404 - page doesn't exist. Refresh and search for a new title!
            </div>
        </div>
    )
}
export default NoResult;