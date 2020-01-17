import * as constants from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    mouse: false,
    list: [],
    page: 2,
    totalPage: 1,
    rotate:false,
    history: []
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.CHANGE_LIST:
            return state.set('list', action.data).set('totalPage', action.totalPage);
        case constants.MOUSE_OVER:
            return state.set('mouse', true);
        case constants.INFO_CLICK:
            return state.set('page', action.page).set('rotate',true);
        case constants.MOUSE_LEAVE:
            return state.set('mouse', false);
        case 'RATATE_FALSE':
            return state.set('rotate', false);
        default:
            return state; 

    }       
}