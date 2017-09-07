import { REGIME_SELECTED } from '../constants/types';

export const selectRegime = (value) => {
    return {
        type: REGIME_SELECTED,
        payload: value,
    }
};
