import React from "react";
//TODO replace tags with materialize 
function Form({ query, handleInputChange, handleFormSubmit }) {
  return (

    <form>
      <div class="input-field">
        <input 
          id="search" 
          type="search" 
          required 
          onChange={handleInputChange} 
          placeholder="Title"
          value={query}
        />
        <label class="label-icon" for="search">
          <i class="material-icons" onClick={handleFormSubmit}>search</i>
        </label>
        <i class="material-icons">close</i>
      </div>
    </form>
  );
}

export default Form;