import {FETCH_PHARMACIES_REQUEST, FETCH_PHARMACIES_SUCCESS, FETCH_PHARMACIES_FAILURE} from '../actions/search';

const initialState = {
    pharmacies: []
};

function pharmacy(state = initialState, action) {
    switch(action.type) {
        case FETCH_PHARMACIES_REQUEST:
            return {
                ...state,
                loading: true };
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

        default:
            return state;
    }
}

export default pharmacy;

