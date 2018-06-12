import * as types from './actionTypes';
import dataQuotations from './../DataQuotations';

function getQuotationsRequest(isReady) {
    return {
        type: types.QUOTATIONS_REQUEST,
        isReady
    }
}

function getQuotationsSuccess(data) {
    return {
        type: types.QUOTATIONS_SUCCESS,
        payload: data
    };
}

function getQuotationsError(messages) {
    return {
        type: types.QUOTATIONS_FAILURE,
        messages: messages
    };
}

export function getQuotations(isReady = false) {

    return function (dispatch) {
        dispatch(getQuotationsRequest(isReady));

        // console.warn(dataQuotations);
        try {
            const arrQuotations = Object.keys(dataQuotations).map(function (item) {
                return {
                    ticker_name: item,
                    last: dataQuotations[item].last,
                    highestBid: dataQuotations[item].highestBid,
                    percentChange: dataQuotations[item].percentChange
                }
            }.bind(this))

            setTimeout(() => dispatch(getQuotationsSuccess(arrQuotations)), 2000);
        } catch (e) {
            console.warn(e.message);
            dispatch(getQuotationsError(e.message));
        }

        // Из за reCaptcha нельзя достать данные
        // fetch("https://poloniex.com/public?command=returnTicker")
        //     .then((response) => {
        //         console.warn(response;
        //     })
        //     .catch((error) => {
        //         console.warn(error);
        //     })
    };
}
