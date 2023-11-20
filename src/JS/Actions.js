// actions.js
import { ADDTASK, DELETETASK, EDITTASK, TASKISDONE } from './ActionTypes';

export const addTask = (description) => ({
  type: ADDTASK,
  payload: {
    description
  }
})

export const taskIsDone = (id) => ({
  type: TASKISDONE,
  payload: {
    id
  }
})
export const deleteTask = (id) => ({
  type: DELETETASK,
  payload: {
    id
  }
})
export const editTask = (id,description) => ({
  type: EDITTASK,
  payload: {
    id,description
  }
})
