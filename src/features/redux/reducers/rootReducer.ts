import types from '../constants'
import { episodeType as State, actionType as Action } from '../../types';

const initialData: State[] = [];

export const rootReducer = (state = initialData, action: Action) => {
    const { type, payload } = action;
    switch (type) {
        case types.LOAD_SUCCESS: {
            return payload || []
        }

        default: return state
    }
};