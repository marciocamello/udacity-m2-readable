import API from '../api/ReadableAPI';
import {showLoading, hideLoading} from 'react-redux-loading';

export const POST_COMMENTS = 'POST_COMMENTS';

export const reveiveComments = (comments) => {
    return {
        type: POST_COMMENTS,
        payload: comments
    }
};

export const getCommentsByPost = postId => {
    return async (dispatch) => {
        dispatch(showLoading());
        const comments = await API.postComments(postId);
        dispatch(reveiveComments(comments));
        dispatch(hideLoading());
    }
};

export const COMMENT_VOTE = 'COMMENT_VOTE';

export const receiveCommentVote = (comment) => {
    return {
        type: COMMENT_VOTE,
        payload: comment
    }
};

export const saveCommentVote = (commentId, option) => {
    return async (dispatch) => {
        dispatch(showLoading());
        const comment = await API.commentVote(commentId, option);
        dispatch(receiveCommentVote(comment));
        dispatch(hideLoading());
    }
};