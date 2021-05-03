import { combineReducers } from 'redux';

import CalenderReducer from '../reducers/Calender/CalenderReducer'
import EventReducer from '../reducers/Event/EventReducer'
import colorReducer from '../reducers/Color/colorReducer'
export default combineReducers({
   calender: CalenderReducer,
   event : EventReducer,
   color : colorReducer
});