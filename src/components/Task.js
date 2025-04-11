import React from 'react';
import { MdDeleteOutline } from "react-icons/md";
import './Task.css';

const Task = ({ task, deleteTask }) => {
  return (
    <div className='task'>
        <h3>{task.name}</h3>
        <p>{task.description}</p>
        <button className='delete-btn' onClick={() => deleteTask(task.id)}>
          <MdDeleteOutline/>
        </button>
    </div>
  )
}

export default Task
