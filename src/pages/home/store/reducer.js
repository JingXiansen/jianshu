import {constants} from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [],
    list: [],
    recommend: [],
    listPage: 1,
    showScroll: false,
});

const up_data = (state,action) => (
    state.merge({
        'topicList':action.topicList,
        'list': action.list,
        'recommend': action.recommend
    })
);

export default (state = defaultState, action) => {
    switch(action.type) {    
        case constants.UP_DATA:
            return up_data(state,action)
        case constants.ADD_LIST:  
            return state.merge({
                'list': state.get('list').concat(action.list.slice((action.nextpage-2)*2,(action.nextpage-1)*2)),
                'listPage': action.nextpage
            })     
        case constants.CHANGE_SCROLL:
            return state.set('showScroll',action.value);            
        default:
            return state; 
    }       
}