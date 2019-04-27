import API from '../api/ReadableAPI';
import {showLoading, hideLoading} from 'react-redux-loading';

export const SHOW_COMMENT = 'SHOW_COMMENT';

export const reveiveComment = (comment, commentId) => {
    return {
        type: SHOW_COMMENT,
        payload: comment,
        commentId,
    }
};

export const getCommentById = commentId => {
    return async (dispatch) => {
        dispatch(showLoading());
        const comment = await API.comment(commentId);
        dispatch(reveiveComment(comment, commentId));
        dispatch(hideLoading());
    }
};


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

export const ADD_COMMENT = 'ADD_COMMENT';

export const receiveCommentAdd = (newComment) => {
    return {
        type: ADD_COMMENT,
        payload: newComment
    }
};

export const saveComment = commentData => {
    return async (dispatch) => {
        dispatch(showLoading());
        const newComment = await API.addComment(commentData);
        dispatch(receiveCommentAdd(newComment));
        dispatch(hideLoading());
    }
};

export const EDIT_COMMENT = 'EDIT_COMMENT';

export const receiveCommentEdit = (commentId, updateComment) => {
    return {
        type: EDIT_COMMENT,
        payload: updateComment,
        commentId
    }
};

export const editComment = (commentId, commentData) => {
    return async (dispatch) => {
        dispatch(showLoading());
        const updateComment = await API.editComment(commentId, commentData);
        dispatch(receiveCommentEdit(commentId, updateComment));
        dispatch(hideLoading());
    }
};

export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveRemoveComment = (commentId, comment) => {
    return {
        type: REMOVE_COMMENT,
        payload: comment,
        commentId
    }
};

export const removeComment = commentId => {
    return async (dispatch) => {
        dispatch(showLoading());
        const removeComment = await API.deleteComment(commentId);
        dispatch(receiveRemoveComment(commentId, removeComment));
        dispatch(hideLoading());
    }
};