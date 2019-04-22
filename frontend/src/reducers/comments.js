import {POST_COMMENTS, COMMENT_VOTE, REMOVE_COMMENT} from "../actions/comments";

export default function (state = {}, action) {
    switch (action.type) {
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
        case REMOVE_COMMENT :
            return {
                ...state,
                postComments: state.postComments.filter(comment => comment.id !== action.payload.id)
            };
        default :
            return state
    }
}
