import Axios from "axios";
import {constants} from './index';
// import { fromJS } from "immutable";

const changeHomeData = (result) => ({
    type: constants.UP_DATA,
    "topicList": result.topicList,
    "list": result.list,
    "recommend": result.recommend
});
const addHomeList = (list,page) => ({
    type: constants.ADD_LIST,
    list,
    nextpage:page+1
})

export const getHomeInfo = () => {
    return (dispatch) => {
        Axios.get('/api/home.json').then((res) => {
            const result = res.data;           
            dispatch(changeHomeData(result));
        })
    }
};
export const getMoreList = (page) => {    
    return (dispatch) => {    
        Axios.get('/api/homeList.json?page'+ page+'&size'+2).then((res) => {
            const result = res.data;   
            if(res.data.length<page*2){alert("到底了！");return null}
            dispatch(addHomeList(result,page));
        })
    }
};
// export const getMoreList = (page) => { 
    
//     var q = Promise.resolve(
//         Axios.get('/api/homeList.json?page'+ page+'&size'+2)
//         );
//         return(
//             dispatch=>(
//         q.then((result) => dispatch(addHomeList(result.data,page+1)))
//    )) }
        
export const changeScroll = (value) => ({
    type: constants.CHANGE_SCROLL,
    value    
})
