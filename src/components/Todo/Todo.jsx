import React from 'react';
import styles from './Todo.module.css';
import { FiTrash2 } from 'react-icons/fi';

export default function Todo({ item, onUpdate, onDelete }) {
    const { todo, status } = item;

    const handleChange = (e) => {
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({ ...item, status });
    };

    const handleDelete = () => {
        onDelete(item);
    };

    return (
        <li className={styles.todo}>
            <input
                type="checkbox"
                id="checkbox"
                checked={status === 'completed'}
                className={styles.checkbox}
                onChange={handleChange}
            />
            <label htmlFor="checkbox" className={styles.text}>
                {todo}
            </label>
            <span className={styles.icon}>
                <button onClick={handleDelete} className={styles.button}>
                    <FiTrash2 />
                </button>
            </span>
        </li>
    );
}
