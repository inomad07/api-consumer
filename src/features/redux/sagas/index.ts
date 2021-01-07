import { all } from 'redux-saga/effects'

import { watcherLoadEpisodes } from './load.saga'
import { watcherOpenEpisode } from "./open.saga";

export default function* rootSaga () {
    yield all([
        watcherLoadEpisodes(),
        watcherOpenEpisode()
        // add other watchers to the array
    ]);
}