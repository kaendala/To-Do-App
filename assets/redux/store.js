import { createStore, combineReducers, compose } from 'redux';
import taskReducer from '../redux/reducers/taskReducer';

const rootReducer = combineReducers({ taskReducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default createStore(rootReducer, composeEnhancers());
