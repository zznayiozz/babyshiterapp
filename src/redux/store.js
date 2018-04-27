import { createStore } from 'redux';
import  appReducers  from './Reducers/index';

const store = createStore(
	appReducers
);

export default store;