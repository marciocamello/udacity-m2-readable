import { POSTS, SHOW_POST, POSTS_BY_DATE, POSTS_BY_VOTE_SCORE, POST_VOTE, ADD_POST, REMOVE_POST } from "../actions/posts";

export default function postsReducer(state = {}, action) {
    switch (action.type) {
        case POSTS :
            return {
                ...state,
                posts: action.payload
            };
        case SHOW_POST :
            return {
                ...state,
                ...action.payload
            };
        case POSTS_BY_DATE :
            return {
                ...state,
                posts: action.payload
            };
        case POSTS_BY_VOTE_SCORE :
            return {
                ...state,
                posts: action.payload
            };
        case POST_VOTE :
            return {
                ...state,
                post: action.payload
            };
        case ADD_POST :
            return {
                ...state,
                posts: [
                    action.payload
                ]
            };
        case REMOVE_POST :
            return {
                ...state,
                ...action.payload
            };
        default :
            return state
    }
}
