import ApiCaller from '../../services/http';
import * as TYPES from './EventActionTypes'

export  const getEvent = (id)=> {
    return function (dispatch) {
         ApiCaller.get('/events/'+id)   
        .then(response => {
            dispatch({
                type: TYPES.FETCH_EVENT,
                payload: {
                    eventDetails: response.data
                },
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

export  const updateEvent = (data,id)=> {
    return function (dispatch) {        
         ApiCaller.put('/events/'+id, data  ) 
        .then(response => {
            dispatch({
                type: TYPES.FETCH_EVENT,
                payload: {
                    eventDetails: response.data
                },
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }
}
