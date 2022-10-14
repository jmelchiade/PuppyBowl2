import React from "react";

const SinglePuppy = (props) => {
	const puppy = props.puppy

	return (
		<div key={`player-${puppy.id}`} className="puppy">
              <div id="pupId">{"#"+ puppy.id} </div>
              <div id="pupName">{puppy.name}</div>
              <img id="puppyImg" src={puppy.imageUrl} alt="image" height={400} width={300}></img>
              <button id="cuteDetails" onClick={(puppy.id)}>Cute Pupper Details</button>
              {/* <button id="btnRmv">Remove from Puppy Roster</button> */}
            </div>
		// <h2>I am a single puppy</h2>
	)
};



export default SinglePuppy;
