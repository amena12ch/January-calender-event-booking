import * as TYPES from '../../store/Color/ColorActionTypes';

const initialState = {
    colors:[]
};

const EventReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.FETCH_COLORS: 
            return {
                colors: action.payload.colors
            };     
        default:
            return state;
    }

};

export default EventReducer;