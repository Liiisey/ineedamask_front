export const ADD_PHARMACY_REQUEST = 'ADD_PHARMACY_REQUEST';
export const ADD_PHARMACY_SUCCESS = 'ADD_PHARMACY_SUCCESS';
export const ADD_PHARMACY_FAILURE = 'ADD_PHARMACY_FAILURE';

export function pharmacyAdd(pharmacy) {
    return function (dispatch) {
        dispatch(pharmacyAddRequest());
        return fetch('http://192.168.1.24:4000/pharmacies', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pharmacy)
        })
            .then(
                response => response.json(),
                error => dispatch(pharmacyAddFailure(error))
            )
            .then(pharmacy => {
                dispatch(pharmacyAddSuccess(pharmacy));
            });
    }
}

export function pharmacyAddRequest() {
    return {type: ADD_PHARMACY_REQUEST}
}

export function pharmacyAddSuccess(pharmacy) {
    return {type: ADD_PHARMACY_SUCCESS, payload: { pharmacy: pharmacy}};
}

export function pharmacyAddFailure(error) {
    return {type: ADD_PHARMACY_FAILURE, payload: error};
}