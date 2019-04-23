import {SHOW_COMMENT, POST_COMMENTS, COMMENT_VOTE, REMOVE_COMMENT, EDIT_COMMENT} from "../actions/comments";

export default function (state = {}, action) {
    switch (action.type) {
        case SHOW_COMMENT :
            return {
                ...state,
                ...action.payload
            };
        case POST_COMMENTS :
            return {
                ...state,
                ...action.payload
            };
        case COMMENT_VOTE :
            return {
                ...state,
                comment: action.payload
            };
        case EDIT_COMMENT :
            const editComments = state.postComments ?
                state.postComments.filter(comment => comment.id !== action.commentId)
                : [];
            return {
                ...state,
                comment: action.payload,
                postComments: [
                    ...editComments,
                    action.payload
                ]
            };
        case REMOVE_COMMENT :
            const removeComments = state.postComments.filter(comment => comment.id !== action.commentId);
            return {
                ...state,
                postComments: removeComments
            };
        default :
            return state
    }
}
