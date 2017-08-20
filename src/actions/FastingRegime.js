import { REGIME_SELECTED } from '../types';

export const selectRegime = (value) => {
    return {
        type: REGIME_SELECTED,
        payload: value,
    }
};
