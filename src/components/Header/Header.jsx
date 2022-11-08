import React from 'react';
import styles from './Header.module.css';

export default function Header({ filters, filter, onUpdatefilter }) {
    return (
        <header className={styles.header}>
            <ul className={styles.filters}>
                {filters.map((value, index) => (
                    <li key={index}>
                        <button
                            className={`${styles.filter} ${
                                filter === value && styles.selected
                            }`}
                            onClick={() => onUpdatefilter(value)}
                        >
                            {value}
                        </button>
                    </li>
                ))}
            </ul>
        </header>
    );
}
