import { useEffect, useState } from 'react';

export default function Details({ infoId }) {
	const [info, setInfo] = useState(null)
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`${process.env.REACT_APP_URL}/${infoId}.json`)
				const data = await response.json()
				setInfo(data)
			} catch (e) {
				console.warn('Bad request')
			}
		})()
	}, [infoId])
	return (
		info && <div className='details'>
			<img src={info.avatar} alt="avatar"/>
			<div className='name'>{info.name}</div>
			<div className='city'>City: {info.details.city}</div>
			<div className='company'>Company: {info.details.company}</div>
			<div className='position'>Position: {info.details.position}</div>
		</div>
	)
}
