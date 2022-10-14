import React from "react";

const Navbar = (props) => {
  return (
    <div id="Navbar">
      <div><h2>Cute Puppy Roster</h2></div>
      <div><form
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
      </form></div>
    </div>
  );
};

export default Navbar;
