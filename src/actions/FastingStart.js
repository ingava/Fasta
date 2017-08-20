import { FASTING_START_SELECTED } from '../types';

export const selectFastingStart = (value) => {
    return {
        type: FASTING_START_SELECTED,
        payload: value,
    }
};
