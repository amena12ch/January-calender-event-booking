import * as TYPES from '../../store/Event/EventActionTypes';

const initialState = {
    eventDetails:{}
};

const EventReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.FETCH_EVENT: 
            return {
                eventDetails: action.payload.eventDetails
            };     
        default:
            return state;
    }

};

export default EventReducer;