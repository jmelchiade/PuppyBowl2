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
              <SinglePuppy puppy={puppy} />
            
          );})) : (
        <div>Loading Puppies...</div>
      )}
    </div>
  );
};

export default AllPuppies;
