import axios from 'axios';
import * as constants from './constants';

const changeLogin = (loginState) => ({
    type: constants.CHANGE_LOGIN,
    loginState
});

export const login = (account, password) => {
    return dispatch => {
        axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
            const result = res.data.success;
            if (result) {
                dispatch(changeLogin(true));
            } else {
                alert('登录失败');
            }
        });
    };
};

export const logout = () => {
    return dispatch => {
        dispatch(changeLogin(false));
    };
};