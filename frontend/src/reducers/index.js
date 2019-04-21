import { combineReducers } from 'redux';
import categoriesReducer from './categories';
import postsReducer from './posts';
import commentsReducer from './comments';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
    categoriesReducer,
    postsReducer,
    commentsReducer,
    loadingBar: loadingBarReducer
})
