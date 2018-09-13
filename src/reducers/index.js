// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import instruments from './instrumentReducers.js';


 export default combineReducers({
   instruments: instruments
 });
