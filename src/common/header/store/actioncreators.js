import * as constants from './actionTypes';
import Axios from 'axios';
// import { fromJS } from 'immutable';


export const searchFocused = () => ({type: constants.SEARCH_FOCUS});
export const searchBlur = () =>({type: constants.SEARCH_BLUR});
export const infoClick = (page) =>({type: constants.INFO_CLICK,page});
export const MouseOver = () =>({type: constants.MOUSE_OVER});
export const MouseLeave = () =>({type: constants.MOUSE_LEAVE});


const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data,
    totalPage: Math.ceil(data.length / 10)
    // : fromJS(data) 
});
export const getlist = () =>{
    return (dispatch) => {
        Axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(() => { console.log('error');})
    }
};

