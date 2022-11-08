import React from 'react';
import { useDarkMode } from '../../context/DarkModeContext';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import styles from './Header.module.css';

export default function Header({ filters, filter, onUpdatefilter }) {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <header className={styles.header}>
            <span className={styles.icon} onClick={toggleDarkMode}>
                {darkMode ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
            </span>
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
