import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    loginState: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_LOGIN:
        return state.set('loginState', action.loginState);
        default:
        return state;
    }
};