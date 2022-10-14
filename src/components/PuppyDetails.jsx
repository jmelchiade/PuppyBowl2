import React from "react";
const PuppyDetails = (props) => {
  const puppy = props.selectedPuppy;
  return (
    // <div These are my puppy details>
    <div key={`player-${puppy.id}`} className="puppy">
      <span id="pupId">
        {"#" + puppy.id}
        <div>{puppy.name}</div>
      </span>
      <img
        id="puppyImg"
        src={puppy.imageUrl}
        alt="image"
        height={400}
        width={300}
      ></img>
      <div> breed: {puppy.breed}</div>
      <div> position: {puppy.status}</div>
      <h2>Pick Me!</h2>
      <button
        id="goBackBtn"
        onClick={() => {
          props.setSelectedPuppy({});
        }}
      >
        {" "}
        Go Back to All Puppies
      </button>
    </div>
  );
};

export default PuppyDetails;
