import Axios from "axios";
import {constants} from './index';


export const getLogin = (account,password) => {
    return (dispatch) => {
        Axios.get('/api/login.json?account='+account+'&password='+password).then((res) => {
            const data = res.data.data;
            if(data){
                dispatch({
                    type: constants.LOGIN,
                    data
                })
            }else{alert('用户名或密码错误')}
           
        })
        } 
}