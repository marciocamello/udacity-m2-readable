import { POST_COMMENTS, COMMENT_VOTE } from "../actions/comments";

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
        default :
            return state
    }
}
