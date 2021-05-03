import ApiCaller from '../../services/http';
import * as TYPES from './ColorActionTypes'

export  const getColorList = ()=> {
    return function (dispatch) {
         ApiCaller.get('/colors')   
        .then(response => {
            dispatch({
                type: TYPES.FETCH_COLORS,
                payload: {
                    colors: response.data
                },
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }
}