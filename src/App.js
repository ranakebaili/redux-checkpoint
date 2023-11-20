// App.js
import React from 'react';
import ListTask from './components/TaskList';
import AddTask from './components/AddTask';
import './App.css'

const App = () => {
  return (
      <div className="App">
        <h1>To Do List</h1>
        <AddTask />
        
        <ListTask />
      </div>
  );
};

export default App;
