import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, taskIsDone } from '../JS/Actions';
import '../App.css';

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [editDescription, setEditDescription] = useState('');
  const [editMode, setEditMode] = useState(null);

  const doneUndone = (id) => {
    dispatch(taskIsDone(id));
  };

  const deleteTaskItem = (id) => {
    dispatch(deleteTask(id));
  };

  const enableEditMode = (id, description) => {
    setEditMode(id);
    setEditDescription(description);
  };

  const saveEditedTask = (id) => {
    dispatch(editTask(id, editDescription));
    setEditMode(null);
  };

  return (
    <div className='all'>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ color: task.isDone ? 'lightgray' : 'black' }}>
            {editMode === task.id ? (
              <div>
                <input
                  type="text"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                />
                <button onClick={() => saveEditedTask(task.id)}>Save</button>
              </div>
            ) : (
              <div className='task'>
                <div>{task.description}</div>
                
                <div className='buttons'>
                <button className={task.isDone ? 'undo' : 'done'} onClick={() => doneUndone(task.id)}>
                    {task.isDone ? 'Undo' : 'Done'}
                  </button>
                    <button className='delete' onClick={() => deleteTaskItem(task.id)}>Delete</button>
                    <button className='edit' onClick={() => enableEditMode(task.id, task.description)}>Edit</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
