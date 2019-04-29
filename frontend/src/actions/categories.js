import API from '../api/ReadableAPI';
import {showLoading, hideLoading} from 'react-redux-loading';

export const CATEGORIES = 'CATEGORIES';

export const receiveCategories = (categories) => {
    return {
        type: CATEGORIES,
        payload: categories
    }
};

export const getCategories = () => {
    return async (dispatch) => {
        dispatch(showLoading());
        const categories = await API.categories();
        dispatch(receiveCategories(categories));
        setTimeout(() => {
            dispatch(hideLoading());
        }, 1000);
    }
};

export const CATEGORIES_POSTS = 'CATEGORIES_POSTS';

export const receiveCategoriesPosts = (posts) => {
    return {
        type: CATEGORIES_POSTS,
        payload: posts
    }
};

export const getCategoriesPosts = (category) => {
    return async (dispatch) => {
        dispatch(showLoading());
        const posts = await API.categoryPosts(category);
        dispatch(receiveCategoriesPosts(posts));
        setTimeout(() => {
            dispatch(hideLoading());
        }, 1000);
    }
};