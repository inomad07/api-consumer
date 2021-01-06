import { takeLatest, call, put } from 'redux-saga/effects';

import { loadCartoonsSuccess, loadCartoonsFailure } from '../actions';
import ConsumerService  from '../../services';
import types from '../constants';

function* workerLoadCartoons() {
    /** function that makes the api request (axios call) and returns a Promise for response */
    try {
        const { data } = yield call(ConsumerService.getAll);
        // dispatch action to change redux state
        yield put(loadCartoonsSuccess(data.results));
    } catch (err) {
        // catch error on a bad axios call
        // dispatch a failure action to the store with the error
        yield put(loadCartoonsFailure(err));
        console.log(err)
    }
}


/** saga watcher that is triggered when dispatching action of type, starts worker saga */
export function* watcherLoadCartoons() {
    yield takeLatest(types.LOAD, workerLoadCartoons);
}