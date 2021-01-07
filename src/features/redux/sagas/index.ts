import { all } from 'redux-saga/effects'

import { watcherLoadEpisodes, watcherOpenEpisode } from './loadEpisodeSaga'

export default function* rootSaga () {
    yield all([
        watcherLoadEpisodes(),
        watcherOpenEpisode()
        // add other watchers to the array
    ]);
}