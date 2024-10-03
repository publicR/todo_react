// src/AddTodo.js

import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            addTodo(newTodo);
            setNewTodo('');
        } else {
            console.log('Empty input'); // Debugging
        }
    };

    return (
        <div className="add-task">
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    );
};

export default AddTodo;
