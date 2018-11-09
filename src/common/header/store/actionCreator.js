import * as constants from './constants';
import axios from 'axios';

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data,
    totalPage: Math.ceil(data.length/10)
});

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});

export const mouseIn = () => ({
    type: constants.MOUSE_IN
});

export const mouseOut = () => ({
    type: constants.MOUSE_OUT
});

export const getList = () => {
    return (dispatch) => {
        axios.get('api/headerList.json').then((res) => {
            dispatch(changeList(res.data.data));
        }).catch(() => {

        });
    };
};

export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
});