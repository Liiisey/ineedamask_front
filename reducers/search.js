import {FETCH_PHARMACIES_REQUEST, FETCH_PHARMACIES_SUCCESS, FETCH_PHARMACIES_FAILURE} from '../actions/search';
import {ADD_PHARMACY_REQUEST, ADD_PHARMACY_SUCCESS, ADD_PHARMACY_FAILURE} from '../actions/pharmacy';

const initialState = {
    pharmacies: []
};

function search(state = initialState, action) {
    switch(action.type) {
        case FETCH_PHARMACIES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_PHARMACIES_SUCCESS:
            return {
                ...state,
                pharmacies: action.payload,
                loading: false
            };
        case FETCH_PHARMACIES_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        case ADD_PHARMACY_REQUEST:
            return {
                ...state,
                loading: true
            };
        case ADD_PHARMACY_SUCCESS:
            return {
                pharmacies: [...state.pharmacies, action.payload]
            };
        case ADD_PHARMACY_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        default:
            return state;
    }
}

export default search;

