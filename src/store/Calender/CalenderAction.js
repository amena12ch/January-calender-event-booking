import ApiCaller from '../../services/http';
import * as TYPES from './CalenderActionTypes'

export const openEventModal = ()=> {
    return function (dispatch) {
                dispatch({                   
                    type: TYPES.OPEN_EVENT_MODAL,
                    payload: {
                        isModalOpen: true,
                    }
                });
    }
}
export const closeEventModal = ()=> {
    return function (dispatch) {
                dispatch({
                    type: TYPES.CLOSE_EVENT_MODAL,
                    payload: {
                        isModalOpen: false
                    }
                });
    }
}
export const getCalender = ()=> {
    return function (dispatch) {
        ApiCaller.get('/events/')
        .then(response => {
            dispatch({
                type: TYPES.FETCH_CALENDER,
                payload: {
                    calender: response.data,                    
                }
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }
}
