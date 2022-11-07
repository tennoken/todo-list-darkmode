import { useRef } from 'react';
import './todoAddForm.module.css';

export default function TodoAddForm({ items, addItem }) {
	const inputRef = useRef();

	const onSubmit = (e) => {
		e.preventDefault();
		const value = inputRef.current.value;
		if (value.trim() !== '') {
			addItem({ id: items.length + 1, todo: value });
		}
		inputRef.current.value = '';
	};

	return (
		<form onSubmit={onSubmit}>
			<input type='text' ref={inputRef} />
			{/* <button type='submit'>Add</button> */}
		</form>
	);
}
