import React from "react";
import { SinglePuppy } from "./";

const AllPuppies = (props) => {
  const myPuppies = props.puppyData;
  console.log(myPuppies);
  return (
    <div className="box">
      {`This is your AllPuppies component`}
      {myPuppies.length ? (
        myPuppies.map((puppy) => {
          return (
            <div key={`player-${puppy.id}`} className="puppy">
              <SinglePuppy puppy={puppy} />
              <div>{puppy.name}</div>
              <div>{puppy.breed}</div>
              <div>{puppy.status}</div>
              <img id="puppyImg" src={puppy.imageUrl} alt="image" height={400} width={300}></img>
            </div>
          );})) : (
        <div>Loading Puppies...</div>
      )}
    </div>
  );
};

export default AllPuppies;
