import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './TodoAddForm.module.css';

export default function TodoAddForm({ onAdd }) {
    const inputRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        const value = inputRef.current.value;
        if (value.trim() !== '') {
            onAdd({ id: uuidv4(), todo: value, status: 'active' });
        }
        inputRef.current.value = '';
    };

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <input
                type="text"
                className={styles.input}
                ref={inputRef}
                placeholder="Add Todo"
            />
            <button type="submit" className={styles.button}>
                Add
            </button>
        </form>
    );
}
