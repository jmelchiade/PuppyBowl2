import React from "react";

const Navbar = (props) => {
  return (
    <div id="Navbar">
      <h2>insert search bar here?</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.setSearchTerm(e.target[0].value);
        }}
      >
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Navbar;
