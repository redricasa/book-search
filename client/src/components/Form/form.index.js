import React from "react";
//TODO replace tags with materialize 
function Form({ query, handleInputChange, handleFormSubmit }) {
  return (
    <div class="nav-wrapper">
      <form>
        <div class="input-field">
          <input 
            onChange={handleInputChange}
            id="search" 
            type="search" 
            required 
             
            placeholder="Title"
            value={query}
          />
          <label class="label-icon" for="search">
            <i class="material-icons" onClick={handleFormSubmit}>search</i>
          </label>

        </div>
      </form>
    </div>
  );
}

export default Form;