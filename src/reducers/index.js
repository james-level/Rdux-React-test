// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import {instrumentsReducer, instrumentReducer} from './instrumentReducers.js';
import basket from './basketReducers';

 export default combineReducers({
   instruments: instrumentsReducer,
   instrument: instrumentReducer,
   basket
 });
