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

export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveRemoveComment = (comment) => {
    return {
        type: REMOVE_COMMENT,
        payload: comment
    }
};

export const removeComment = commentId => {
    return async (dispatch) => {
        dispatch(showLoading());
        const removeComment = await API.deleteComment(commentId);
        dispatch(receiveRemoveComment(removeComment));
        dispatch(hideLoading());
    }
};