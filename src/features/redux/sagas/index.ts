import { all } from 'redux-saga/effects'

import { watcherLoadCartoons } from './load.saga'

export default function* rootSaga () {
    yield all([
        watcherLoadCartoons(),
        // add other watchers to the array
    ]);
}