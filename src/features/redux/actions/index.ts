import types from '../constants'
import {episodeType} from "../../types";
// Helper functions to dispatch actions, optionally with payloads

const loadEpisodes = () => {
    return {
        type: types.LOAD
    }
};

const loadEpisodesSuccess = (data: episodeType[]) => {
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

const openEpisode = (data: number ) => {
    return {
        type: types.LOAD_EPISODE,
        payload: data
    }
};

const openEpisodeSuccess = (data: episodeType) => {
    return {
        type: types.LOAD_EPISODE_SUCCESS,
        payload: data
    }
};

const openEpisodeFailure = (data: any) => {
    return {
        type: types.LOAD_EPISODE_FAILURE,
        payload: data
    }
};


export {
    loadEpisodes,
    loadEpisodesSuccess,
    loadEpisodesFailure,

    openEpisode,
    openEpisodeSuccess,
    openEpisodeFailure
};