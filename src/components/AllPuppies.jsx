import React from "react";

const AllPuppies = (props) => {
	const myPuppies = props.puppyData
	console.log(myPuppies)
	return ( 
		
		<div className="box">{"This is your AllPuppies component"}
		{myPuppies.length ?
			myPuppies.map((puppy) => {
				console.log(puppy)
			})
	:	<div>Loading the Cutest Puppies...</div>}
		</div>
	)}
 
export default AllPuppies;