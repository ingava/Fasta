import moment from 'moment';
import { INTERVAL_SELECTED, FASTING_START_SELECTED } from '../constants/types';

const initialState = {
    timeToStopFasting: null,
    fastingStart: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case INTERVAL_SELECTED:
            return {
                ...state,
                timeToStopFasting: moment().add(action.payload, 'hours'),
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
