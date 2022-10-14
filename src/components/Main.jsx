import React, { useEffect, useState } from "react";
import { Navbar, AllPuppies, SinglePuppy } from "./";

const Main = () => {
  const [puppyData, setPuppyData] = useState([]);
  useEffect(() => {
    async function getPuppyData() {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players"
      );
      const result = await response.json();
      const data = result.data.players;
      setPuppyData(data);
      console.log(result.data.players);
    }
    getPuppyData();
  }, []);
  console.log(puppyData, "This is puppy data");
  return (
    <div id="main">
      <Navbar />
      <AllPuppies puppyData={puppyData} />
      <SinglePuppy/>
    </div>
  );
};

export default Main;
