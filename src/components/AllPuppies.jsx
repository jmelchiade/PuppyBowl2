import React from "react";

const AllPuppies = (props) => {
	const myPuppies = props.puppyData
	console.log(myPuppies)
	return ( 
		<div className='box'>{`This is your AllPuppies component`}
		{myPuppies.length ?
			myPuppies.map((puppy) => {
				return (
					<SinglePuppy />
				)
					// <div key={`player-${puppy.id}`} className='puppy'>
						{/* <div>{puppy.name}</div>
						<div>{puppy.breed}</div>
						<div>{puppy.status}</div> */}
				// )
				// {/* console.log(puppy) */}
			})
	:	<div>Loading the Cutest Puppies...</div>}
		</div>
	)}
 
export default AllPuppies;