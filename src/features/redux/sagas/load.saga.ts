import { takeLatest, call, put } from 'redux-saga/effects';

import { loadEpisodesSuccess, loadEpisodesFailure } from '../actions';
import { getAllEpisodes }  from '../../services/consumer.service';
import types from '../constants';

function* workerLoadEpisodes() {
    /** function that makes the api request (axios call) and returns a Promise for response */
    try {
        const { data } = yield call(getAllEpisodes);
        // dispatch action to change redux state
        yield put(loadEpisodesSuccess(data.results));
    } catch (err) {
        // catch error on a bad axios call
        // dispatch a failure action to the store with the error
        yield put(loadEpisodesFailure(err));
        console.log(err)
    }
}


/** saga watcher that is triggered when dispatching action of type, starts worker saga */
export function* watcherLoadEpisodes() {
    yield takeLatest(types.LOAD, workerLoadEpisodes);
}