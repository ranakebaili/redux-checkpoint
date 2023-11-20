// store.js
import { createStore } from 'redux';
import taskReducer from './Reducers';

const store = createStore(taskReducer);

export default store;
