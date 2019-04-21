import {getCategories} from "./categories";
import {getPosts} from "./posts";

export function handleInitialData() {
    return (dispatch) => {
        dispatch(getCategories());
        dispatch(getPosts());
    }
}
