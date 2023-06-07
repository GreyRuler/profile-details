import Item from './Item';

export default function List({ users, infoId, onClickProfile }) {
	return (
		<ul>{
			users.map(user => <Item key={user.id} item={user} infoId={infoId} onClickProfile={onClickProfile}/>)
		}</ul>
	)
}
