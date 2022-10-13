import React, { useState } from "react";
import { Navbar, AllPuppies } from "./";

const puppies = [
{"id": 1, "name": "Spots",},
{"id": 2, "name": "Bingo",},
{"id": 3, "name": "Dottie",},

]







const Main = () => {
  const [puppyData, setPuppyData] = useState(puppies)
  return (
    <div id="main">
      <Navbar />
      <AllPuppies />
    </div>
  );
};

export default Main;
