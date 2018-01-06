import { INTERVAL_SELECTED, FASTING_START_SELECTED } from '../constants/types';

const initialState = {
    fastingStart: null,
    selectedInterval: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case INTERVAL_SELECTED:
            return {
                ...state,
                selectedInterval: action.payload,
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
