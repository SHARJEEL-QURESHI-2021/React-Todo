import React, { useState } from 'react';
import '../index.css';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    };

    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    const deleteAllTodos = () => {
        setTodos([]);
    };

    return (
        <div className="todo-app">
            <h1>Todo App</h1>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Add a new todo..."
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button onClick={addTodo}>Add</button>
            </div>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo} <button onClick={() => deleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button className="delete-all" onClick={deleteAllTodos}>
                Delete All
            </button>
        </div>
    );
}

export default TodoApp;
