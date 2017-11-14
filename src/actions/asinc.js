import YTSearch from 'youtube-api-search';
import {SEARCH} from './actionTypes';
const API_KEY = 'AIzaSyB8A0fZ5Z993zAJ_iB99vjowRygmRP78qk';

export function search (term){
    YTSearch({key: API_KEY, term}, function(searchResult){
        return {
            type: SEARCH,
            searchResult
        }
    })
}