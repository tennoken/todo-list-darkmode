import React from 'react';
import styles from './Todo.module.css';
import { FiTrash2 } from 'react-icons/fi';

export default function Todo({ item, onUpdate, onDelete }) {
    const { id, todo, status } = item;

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
                id={id}
                checked={status === 'completed'}
                className={styles.checkbox}
                onChange={handleChange}
            />
            <label htmlFor={id} className={styles.text}>
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
