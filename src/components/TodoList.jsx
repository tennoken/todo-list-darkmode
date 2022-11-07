import styles from './todolist.module.css';

export default function TodoList({ items, deleteItem }) {
	const handleDelete = (e) => {
		// console.log(e.target.parentNode.id);
		const id = e.target.parentNode.id;
		deleteItem(id);
	};

	return (
		<ul>
			{items.map((item) => (
				<li key={item.id} id={item.id}>
					<input type='checkbox' />
					{item.todo}
					<button onClick={handleDelete}>삭제</button>
				</li>
			))}
		</ul>
	);
}
