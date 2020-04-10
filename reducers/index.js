import {combineReducers} from 'redux';
import search from './search';

export default combineReducers({
    pharmacy: search
});
