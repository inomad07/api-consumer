import { all } from 'redux-saga/effects'

import { watcherLoadEpisodes } from './load.saga'

export default function* rootSaga () {
    yield all([
        watcherLoadEpisodes(),
        // add other watchers to the array
    ]);
}