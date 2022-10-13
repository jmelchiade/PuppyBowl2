import React, { useEffect, useState } from 'react'

const fetch = (props) => {
	const [data, setData] = useState()
	useEffect(() => {
		async function getData() {
		let response = await fetch('https://jsonplaceholder.typicode/posts/1')
		let jsonData = response.jsonData()
		console.log(data)
	}
	getData()
	}, [])
	return (
		<div className='box'>('This is your fetch component')
		</div> )
		}
export default fetch;