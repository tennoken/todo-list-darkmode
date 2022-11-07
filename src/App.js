import { useState } from 'react';
import TodoAddForm from './components/TodoAddForm';
import TodoList from './components/TodoList';
import './app.module.css';

function App() {
	const [items, setItems] = useState([
		{ id: 1, todo: '산책' },
		{ id: 2, todo: '공부' },
	]);

	const addItem = (item) => {
		setItems((prev) => [...prev, item]);
	};

	const deleteItem = (id) => {
		setItems((prev) => items.filter((item) => item.id !== parseInt(id)));
	};

	return (
		<main>
			<header>Header</header>
			<TodoList items={items} deleteItem={deleteItem} />
			<TodoAddForm items={items} addItem={addItem} />
		</main>
	);
}

export default App;
