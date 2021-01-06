import types from '../constants'
import { episodeType as Episode } from '../../types';
// Helper functions to dispatch actions, optionally with payloads

const loadCartoons = () => {
    return {
        type: types.LOAD
    }
};

const loadCartoonsSuccess = (data: []) => {
    return {
        type: types.LOAD_SUCCESS,
        payload: data
    }
};

const loadCartoonsFailure = (data: any) => {
    return {
        type: types.LOAD_FAILURE,
        payload: data
    }
};


export {
    loadCartoons,
    loadCartoonsSuccess,
    loadCartoonsFailure,
};