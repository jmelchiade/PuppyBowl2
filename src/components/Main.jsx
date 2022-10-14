import React, { useEffect, useState } from "react";
import { Navbar, AllPuppies, SinglePuppy, PuppyDetails } from "./";

const Main = () => {
  const [puppyData, setPuppyData] = useState([]);
  const [selectedPuppy, setSelectedPuppy] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getPuppyData() {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players"
      );
      const result = await response.json();

      const data = result.data.players;
      setPuppyData(data);
    }
    getPuppyData();
  }, []);

  function filterPuppyData() {
    if (!searchTerm) {
      return puppyData;
    } else {
      return puppyData.filter((puppy) => {
        return puppy.name.toLowerCase() === searchTerm.toLowerCase();
      });
    }
  }

  async function getPuppy(playerId) {
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players/${playerId}`
      );
      const result = await response.json();
      const singlePuppy = result.data.player;
      setSelectedPuppy(singlePuppy);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div id="main">
      <Navbar setSearchTerm={setSearchTerm} />
      {selectedPuppy.id ? (
        <PuppyDetails
          selectedPuppy={selectedPuppy}
          setSelectedPuppy={setSelectedPuppy}
        />
      ) : (
        <AllPuppies puppyData={filterPuppyData()} getPuppy={getPuppy} />
      )}
    </div>
  );
};

export default Main;
