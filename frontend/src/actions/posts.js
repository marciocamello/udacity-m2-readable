import API from '../api/ReadableAPI';
import {showLoading, hideLoading} from 'react-redux-loading';
import generateUID from "../utils/GenerateUUID";

export const POSTS = 'POSTS';

export const receivePosts = (posts) => {
    return {
        type: POSTS,
        payload: posts
    }
};

export const getPosts = () => {
    return async (dispatch) => {
        dispatch(showLoading());
        const posts = await API.posts();
        dispatch(receivePosts(posts));
        dispatch(hideLoading());
    }
};

export const SHOW_POST = 'SHOW_POST';

export const receivePost = (post) => {
    return {
        type: SHOW_POST,
        payload: post
    }
};

export const getPost = (postId) => {
    return async (dispatch) => {
        dispatch(showLoading());
        const post = await API.post(postId);
        dispatch(receivePost(post));
        dispatch(hideLoading());
    }
};

export const POSTS_BY_DATE = 'POSTS_BY_DATE';

export const filterPostsByDate = (posts) => {
    const filterPosts = posts.slice().sort((a, b) => b.timestamp - a.timestamp);
    return {
        type: POSTS_BY_DATE,
        payload: filterPosts
    }
};

export const POSTS_BY_VOTE_SCORE = 'POSTS_BY_VOTE_SCORE';

export const filterPostsByVoteScore = (posts) => {
    const filterPosts = posts.slice().sort((a, b) => {
        if (a.voteScore > b.voteScore) return 1;
        if (a.voteScore < b.voteScore) return -1;
    });
    return {
        type: POSTS_BY_VOTE_SCORE,
        payload: filterPosts
    }
};

export const filterPosts = (posts, filter) => {
    return async (dispatch) => {
        dispatch(showLoading());
        switch (filter) {
            case 'VoteScore':
                dispatch(filterPostsByVoteScore(posts));
                break;
            case 'Date':
                dispatch(filterPostsByDate(posts));
                break;
            default:
                dispatch(getPosts());
                break;
        }
        dispatch(hideLoading());
    }
};

export const POST_VOTE = 'POST_VOTE';

export const receivePostVote = (post) => {
    return {
        type: POST_VOTE,
        payload: post
    }
};

export const savePostVote = (postId, option) => {
    return async (dispatch) => {
        dispatch(showLoading());
        const post = await API.postVote(postId, option);
        dispatch(receivePostVote(post));
        dispatch(hideLoading());
    }
};

export const ADD_POST = 'ADD_POST';

export const receivePostAdd = (newPost) => {
    return {
        type: ADD_POST,
        payload: newPost
    }
};

export const savePost = postData => {
    return async (dispatch) => {
        dispatch(showLoading());
        const newPost = await API.addPost(postData);
        dispatch(receivePostAdd(newPost));
        dispatch(hideLoading());
    }
};

export const REMOVE_POST = 'REMOVE_POST';

export const receiveRemovePost = (post) => {
    return {
        type: REMOVE_POST,
        payload: post
    }
};

export const removePost = postId => {
    return async (dispatch) => {
        dispatch(showLoading());
        const removePost = await API.deletePost(postId);
        dispatch(receiveRemovePost(removePost));
        dispatch(hideLoading());
    }
};