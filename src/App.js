import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import { useState } from 'react';

const filters = ['all', 'active', 'completed'];
function App() {
    const [filter, setFilter] = useState('all');

    const updateFilter = (status) => {
        setFilter(status);
    };
    return (
        <>
            <Header
                filters={filters}
                filter={filter}
                onUpdatefilter={updateFilter}
            />
            <TodoList filter={filter} />
        </>
    );
}

export default App;
