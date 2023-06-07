import './App.css'
import './assets/css/google-icons.css'
import List from './components/List';
import { useEffect, useState } from 'react';
import Details from './components/Details';

function App() {
	const [users, setUsers] = useState([])
	const [infoId, setInfoId] = useState(null)
	useEffect(() => {
		(async () => {
			const response = await fetch(`${process.env.REACT_APP_URL}/users.json`)
			const list = await response.json()
			setUsers(list)
		})()
	}, [])
	const onClickProfile = (id) => {

		setInfoId(id)
	}
	return (
		<div className='app'>
			<List users={users} onClickProfile={onClickProfile} infoId={infoId}/>
			{infoId && <Details infoId={infoId}/>}
		</div>
	);
}

export default App;
