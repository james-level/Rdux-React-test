// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import {instrumentsReducer, instrumentReducer} from './instrumentReducers.js';


 export default combineReducers({
   instruments: instrumentsReducer,
   instrument: instrumentReducer
 });
