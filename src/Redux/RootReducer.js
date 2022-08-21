import todoReducer from './ToDo/Reducer';
import filterReducer from './Filter/Reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
});

export default rootReducer;