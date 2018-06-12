import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function audios(state = initialState.quotations, action) {
    switch (action.type) {
        case types.QUOTATIONS_REQUEST:
            return Object.assign({}, state, {
                isReady: action.isReady
            })
        case types.QUOTATIONS_SUCCESS:
            return Object.assign({}, state, {
               data: action.payload,
               isReady: true
            })
        case types.QUOTATIONS_FAILURE:
            return Object.assign({}, state, {
                error: action.messages,
                isReady: true
            })
        default:
            return state;
    }
}