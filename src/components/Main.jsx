import React, { useEffect, useState } from "react";
import { Navbar, AllPuppies } from "./";

const puppies = [
{"id": 1, "name": "Spots",},
{"id": 2, "name": "Bingo",},
{"id": 3, "name": "Dottie",},

]

const Main = () => {
  const [puppyData, setPuppyData] = useState(puppies)
  useEffect(() => {
    async function getPuppyData() {
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players')
      const result = await response.json();
      console.log(result.data.players);
    }
    getPuppyData()
  }, [])
  return (
    <div id="main">
      <Navbar />
      <AllPuppies puppyData={puppyData}  />
    </div>
  );
};

export default Main;
