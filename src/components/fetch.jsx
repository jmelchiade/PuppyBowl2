import React, { useEffect } from 'react'

const fetch = (props) => {

	useEffect(() => {
		async function getData() {
		let data = await fetch('https://jsonplaceholder.typicode/posts/1')
		console.log(data)
	}
	getData()
	}, [])
	return (
		<div className='box'>('This is your fetch component')
		</div> )
		}
export default fetch;