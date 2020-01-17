import Axios from "axios";
import {constants} from './index';


export const getDetailData = (id) => {
    return (dispatch) => {
        Axios.get('/api/detail.json?id='+id).then((res) => {
            const data = res.data;
            dispatch({
                type: constants.GET_DETAIL,
                data,
            })})
        } 
}