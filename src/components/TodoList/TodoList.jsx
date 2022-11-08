import TodoAddForm from '../TodoAddForm/TodoAddForm';
import { useState } from 'react';
import Todo from '../Todo/Todo';
import styles from './Todolist.module.css';

export default function TodoList({ filter }) {
    const [items, setItems] = useState([
        { id: '1', todo: '산책', status: 'active' },
        { id: '2', todo: '공부', status: 'active' },
        { id: '3', todo: '독서', status: 'completed' },
    ]);

    const filteredItems = getFilterdItems(items, filter);

    const handleAdd = (item) => {
        setItems((prev) => [...prev, item]);
    };

    const handleUpdate = (updated) => {
        setItems(
            items.map((item) => (item.id === updated.id ? updated : item))
        );
    };

    const handleDelete = (deleted) => {
        setItems(items.filter((item) => item.id !== deleted.id));
    };
    return (
        <section className={styles.container}>
            <ul className={styles.list}>
                {filteredItems.map((item) => (
                    <Todo
                        key={item.id}
                        item={item}
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
            <TodoAddForm onAdd={handleAdd} />
        </section>
    );
}

function getFilterdItems(items, filter) {
    if (filter === 'all') {
        return items;
    }
    return items.filter((item) => item.status === filter);
}
