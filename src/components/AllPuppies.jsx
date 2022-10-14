import React from "react";
import { SinglePuppy } from "./";

const AllPuppies = (props) => {
  const myPuppies = props.puppyData;
  console.log(myPuppies);
  return (
    <div className="box">
      {myPuppies.length ? (
        myPuppies.map((puppy) => {
          return (
            <div key={`player-${puppy.id}`} className="puppy">
              <SinglePuppy puppy={puppy} />
              <div id="pupId">{"#"+ puppy.id} </div>
              <div id="pupName">{puppy.name}</div>
              <img id="puppyImg" src={puppy.imageUrl} alt="image" height={400} width={300}></img>
              <button id="cuteDetails">Cute Pupper Details</button>
              <button id="btnRmv">Remove from Puppy Roster</button>
            </div>
          );})) : (
        <div>Loading Puppies...</div>
      )}
    </div>
  );
};

export default AllPuppies;
