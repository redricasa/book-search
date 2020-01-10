import React from "react";
//TODO replace tags with materialize 
function Form({ query, handleInputChange, handleFormSubmit }) {
  return (
    <div className="nav-wrapper">
      <div>
        <div className="input-field">
          <input 
            onChange={handleInputChange}
            id="search" 
            type="search"  
            placeholder="Title"
            required
          />
          <label className="label-icon" for="search">
            <i className="material-icons">search</i> 
          </label>
          <button 
            className="btn waves-effect waves-light" 
            onClick={handleFormSubmit}
            >Submit
            <i className="material-icons right" >send</i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;