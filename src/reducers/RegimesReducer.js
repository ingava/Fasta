import { REGIME_SELECTED, FASTING_START_SELECTED } from '../types';

const initialState = {
    regime: null,
    fastingStart: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REGIME_SELECTED:
            return {
                ...state,
                regime: action.payload,
            };
        case FASTING_START_SELECTED:
            return {
                ...state,
                fastingStart: action.payload,
            };
        default:
            return state;
    }
}
