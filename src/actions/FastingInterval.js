import { INTERVAL_SELECTED } from '../constants/types';

export const selectInterval = (value) => {
    return {
        type: INTERVAL_SELECTED,
        payload: value,
    }
};
