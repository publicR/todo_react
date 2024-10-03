import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Filter from './Filter';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    // Fetch tasks from the API on component mount
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch('https://dummyjson.com/todos');
                const data = await response.json();
                setTodos(data.todos); // Assuming 'todos' is the key in the response
            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        };

        fetchTodos();
    }, []);

    // Add a new task
    const addTodo = async (text) => {
        const newTodo = { userId: 5, todo: text, completed: false };
        try {
            const response = await fetch('https://dummyjson.com/todos/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTodo),
            });
            const result = await response.json();
            setTodos((prev) => [result, ...prev]);
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    };

    // Toggle task completion
    const toggleTodo = async (id, status) => {
        const newTodo = { completed: !status };
        try {
            const response = await fetch(`https://dummyjson.com/todos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTodo),
            });
            const result = await response.json();
            setTodos((prev) =>
                prev.map((todo) => (todo.id === id ? { ...todo, completed: !status } : todo))
            );
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    };

    // Delete a task
    const deleteTodo = async (id) => {
        try {
            await fetch(`https://dummyjson.com/todos/${id}`, {
                method: 'DELETE',
            });
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };

    // Filter tasks based on selected filter
    const filteredTodos = todos.filter((todo) => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'pending') return !todo.completed;
        return true; // all
    });

    return (
        <div className="todo-app">
            <h1></h1>
            <AddTodo addTodo={addTodo} />
            <Filter setFilter={setFilter} />
            <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </div>
    );
};

export default TodoApp;
