// src/TodoItem.js

import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <li className="todo-item">
            <span
                onClick={() => toggleTodo(todo.id, todo.completed)}
                className="todo-text"
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
                {todo.todo}
            </span>
            <div className="actions">
                <button
                    className={`toggle-btn ${todo.completed ? 'revert' : 'complete'}`}
                    onClick={() => toggleTodo(todo.id, todo.completed)}
                >
                    {todo.completed ? 'Mark as In-completed' : 'Mark as Completed'}
                </button>
                <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
                    Delete
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
