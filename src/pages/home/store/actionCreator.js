import axios from 'axios';
import * as constants from './constants';

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
});

const addHomeList = (list, articlePage) => ({
    type: constants.ADD_HOME_LIST,
    list,
    articlePage
});

export const getHomeData = () => {
    return dispatch => {
        axios.get('/api/home.json').then(res => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        });
    };
};

export const getMoreList = articlePage => {
    return dispatch => {
        axios.get('/api/homeList.json?page=' + articlePage).then(res => {
            const list = res.data.data;
            dispatch(addHomeList(list, articlePage));
        });
    };
};

export const toggleScrollShow = showScroll => ({
    type: constants.TOGGLE_SCROLL_SHOW,
    showScroll
});