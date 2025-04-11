import React, { useState } from 'react';
import './App.css';

import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import Header from './components/Header';

function App() {
  const [tasks, setTasks] = useState([]);

  // Function to add a task
  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <Header/>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
