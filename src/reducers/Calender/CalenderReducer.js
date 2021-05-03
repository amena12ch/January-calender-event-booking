import * as TYPES from '../../store/Calender/CalenderActionTypes';

const initialState = {
    isModalOpen: false,
    calender: []
};

const CalenderReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.OPEN_EVENT_MODAL:
            return {
                isModalOpen: action.payload.isModalOpen
            };
        case TYPES.CLOSE_EVENT_MODAL:
            return {
                isModalOpen: action.payload.isModalOpen
            };    
        case TYPES.FETCH_CALENDER:
            return {
                calender: action.payload.calender
            };    
        default:
            return state;
    }

};

export default CalenderReducer;