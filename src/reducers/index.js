import { combineReducers } from 'redux';
import RegimesReducer from './RegimesReducer';

export default combineReducers({
    regimes: RegimesReducer,
})
