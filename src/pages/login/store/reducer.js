import {constants} from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
   login: false,
});

export default (state = defaultState, action) => {
    switch(action.type) {    
        case constants.LOGIN:
            return state.set('login', action.data)               
        default:
            return state; 
    }  }     
