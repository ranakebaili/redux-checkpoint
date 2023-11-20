// Reducers.js
import { ADDTASK, DELETETASK, TASKISDONE, EDITTASK } from './ActionTypes';

const initialState = {
  tasks: [
    {
      id: 1,
      description: 'task1',
      isDone: false,
    },
    {
      id: 2,
      description: 'eezdjhzbeduhzebucdbezucybezycbeyzfoi',
      isDone: false,
    }
  ]
}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTASK:
      const newTask = {
        id: state.tasks.length + 1,
        description: action.payload.description,
        isDone: false,
      }
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      }

    case TASKISDONE:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, isDone: !task.isDone }
            : task
        )
      }
    case DELETETASK:
      return {
        ...state,tasks:state.tasks.filter(task=> task.id!==action.payload.id)
      }
    case EDITTASK:
      return {
        ...state,tasks:state.tasks.map(task=>task.id===action.payload.id? {...task,description:action.payload.description}:task)
      }



    default:
      return state;
  }
};

export default taskReducer;