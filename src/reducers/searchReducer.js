import {SEARCH} from '../actions/actionTypes';
export default function  searchReducer(state={
    videos: []
}, action){
    switch(action.type){
        case SEARCH : {
            return {
                ...state,
                videos: action.searchResult
            }
        }
        default : {
            return state
        }
    }
}