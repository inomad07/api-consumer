import types from '../constants'
import { actionType as Action } from '../../types'

const initialState = {
    data: null,
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
            return { ...state, payload, isFetching: false }
        }

        default: return state
    }
};