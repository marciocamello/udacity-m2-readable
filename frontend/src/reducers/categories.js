import { CATEGORIES, CATEGORIES_POSTS } from "../actions/categories";

export default function (state = {}, action) {
    switch (action.type) {
        case CATEGORIES :
            return {
                ...state,
                categories: action.payload
            };
        case CATEGORIES_POSTS :
            return {
                ...state,
                categoryPosts: action.payload
            };
        default :
            return state
    }
}
