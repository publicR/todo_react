import React from 'react';
import TodoApp from './TodoApp';
import './App.css';

const App = () => {
  return (
      <div className="App">
          <header className="header">
              <h1>My To-Do List</h1>
          </header>
          <TodoApp/>
          <footer className="footer">
              <p>&copy; 2024 My To-Do App | Built with React</p>
          </footer>
      </div>
  );
};

export default App;
