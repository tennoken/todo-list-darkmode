import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import { useState } from 'react';
import { DarkModeProvider } from './context/DarkModeContext';

const filters = ['all', 'active', 'completed'];
function App() {
    const [filter, setFilter] = useState('all');

    const updateFilter = (status) => {
        setFilter(status);
    };
    return (
        <DarkModeProvider>
            <Header
                filters={filters}
                filter={filter}
                onUpdatefilter={updateFilter}
            />
            <TodoList filter={filter} />
        </DarkModeProvider>
    );
}

export default App;
