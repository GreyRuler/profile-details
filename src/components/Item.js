import classNames from 'classnames';

export default function Item({item, infoId, onClickProfile}) {
	const classnameItem = classNames({
		active: infoId === item.id
	})
	return (
		<li className={classnameItem}
			onClick={() => onClickProfile(item.id)}>
			{item.name}
		</li>
	)
}
