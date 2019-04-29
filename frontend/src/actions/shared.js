import {getCategories} from "./categories";
import {getPosts} from "./posts";
import {hideLoading, showLoading} from "react-redux-loading";

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        dispatch(getCategories());
        dispatch(getPosts());
        setTimeout(() => {
            dispatch(hideLoading());
        }, 1000);
    }
}
