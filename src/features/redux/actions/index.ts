import types from '../constants'
// Helper functions to dispatch actions, optionally with payloads

const loadEpisodes = () => {
    return {
        type: types.LOAD
    }
};

const loadEpisodesSuccess = (data: any) => {
    return {
        type: types.LOAD_SUCCESS,
        payload: data
    }
};

const loadEpisodesFailure = (data: any) => {
    return {
        type: types.LOAD_FAILURE,
        payload: data
    }
};


export {
    loadEpisodes,
    loadEpisodesSuccess,
    loadEpisodesFailure,
};