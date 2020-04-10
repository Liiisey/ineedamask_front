export const FETCH_PHARMACIES_REQUEST = 'FETCH_PHARMACIES_REQUEST';
export const FETCH_PHARMACIES_SUCCESS = 'FETCH_PHARMACIES_SUCCESS';
export const FETCH_PHARMACIES_FAILURE = 'FETCH_PHARMACIES_FAILURE';

export function fetchPharmacies() {
    return function(dispatch) {
        dispatch(fetchPharmaciesRequest());
        console.log(process.env.API_URL);
        return fetch('http://192.168.1.24:4000/pharmacies')
            .then(
                response => response.json(),
                error => dispatch(fetchPharmaciesFailure(error))
            )
            .then(data => {
                dispatch(fetchPharmaciesSuccess(data));
            });
    }
}

export function fetchPharmaciesRequest() {
    return {type: FETCH_PHARMACIES_REQUEST};
}
export function fetchPharmaciesSuccess(pharmacies) {
    return {type: FETCH_PHARMACIES_SUCCESS, payload: pharmacies};
}
export function fetchPharmaciesFailure(error) {
    return {type: FETCH_PHARMACIES_FAILURE, payload: error};
}