import userDataReducer from './userData';
import viewReducer from './view';
import isLoggedReducer from './isLogged';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    userData: userDataReducer,
    view: viewReducer,
    isLogged: isLoggedReducer
})

export default rootReducer