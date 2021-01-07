import types from '../constants'
import { actionType as Action } from '../../types'

const initialState = {
    data: null,
    episode: null,
    isFetching: false,
    errorMessage: null
};

export const episodeReducer = (state = initialState, action: Action) => {
    const { type, payload } = action;
    switch (type) {
        case types.LOAD: {
            return { ...state, isFetching: true }
        }

        case types.LOAD_SUCCESS: {
            return { ...state, data: payload, isFetching: false } || {}
        }

        case types.LOAD_FAILURE: {
            return { ...state, errorMessage: payload, isFetching: false }
        }

        case types.LOAD_EPISODE: {
            return { ...state, isFetching: true }
        }

        case types.LOAD_EPISODE_SUCCESS: {
            return { ...state, episode: payload, isFetching: false }
        }

        case types.LOAD_EPISODE_FAILURE: {
            return { ...state, errorMessage: payload, isFetching: false }
        }

        default: return state
    }
};