import React from "react";

const SinglePuppy = (props) => {
	const puppy = props.puppy
	
	return (
		<div key={`player-${puppy.id}`} className="puppy">
              <span id="pupId">{"#"+ puppy.id}
              <div>{puppy.name}</div></span>
              <img id="puppyImg" src={puppy.imageUrl} alt="image" height={400} width={300}></img>
              <button id="cuteDetails" onClick={()=> {props.getPuppy(puppy.id)}}>Cute Pupper Details</button>
			{/* <h2>I am a single puppy</h2> */}
              
            </div>
	)
};



export default SinglePuppy;
