import { combineReducers } from 'redux';

import CalenderReducer from '../reducers/Calender/CalenderReducer'
import EventReducer from '../reducers/Event/EventReducer'

export default combineReducers({
   calender: CalenderReducer,
   event : EventReducer
});
