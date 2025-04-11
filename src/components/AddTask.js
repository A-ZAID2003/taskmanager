import React, { useState } from 'react';
import './AddTask.css'; 

const AddTask = ({ addTask }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim() && taskDescription.trim()) {
            addTask({ name : taskName, description: taskDescription });
            setTaskName('');
            setTaskDescription('');
        }
    };

 
   return (
    <form onSubmit={handleSubmit}>
        <input 
            type = 'text'
            placeholder = 'Task name'
            value={taskName} 
            onChange={(e) => setTaskName(e.target.value)}
        />

        <textarea
            placeholder='Task Description'
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
        />
        <button type='submit'>Add Task</button>
    </form>
  );
};

export default AddTask;
