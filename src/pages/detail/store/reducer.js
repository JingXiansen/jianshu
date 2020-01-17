import {constants} from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    list:[],
});

export default (state = defaultState, action) => {
    switch(action.type) {    
        case constants.GET_DETAIL:
            return state.merge({
                list: action.data
            })
               
        default:
            return state; 
    }  }     
