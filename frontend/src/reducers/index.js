import { combineReducers } from 'redux';
import categoriesReducer from './categories';
import postsReducer from './posts';
import commentsReducer from './comments';
import { loadingBarReducer } from 'react-redux-loading';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    categoriesReducer,
    postsReducer,
    commentsReducer,
    form: formReducer,
    loadingBar: loadingBarReducer
})
