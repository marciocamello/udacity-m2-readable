import React, {Component, Fragment} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {handleInitialData} from "../actions/shared";
import LoadingBar from 'react-redux-loading';

// components
import HeaderContainer from '../components/Header/HeaderContainer';
import ViewPost from "./Post/ViewPost";
import Home from "./Pages/Home";
import AddPost from "./Post/AddPost";
import {editPost, removePost, savePost} from "../actions/posts";
import {editComment, getCommentById, removeComment, saveComment} from "../actions/comments";
import EditPost from "./Post/EditPost";
import EditComment from "./Comment/EditComment";
import AddComment from "./Comment/AddComment";


class App extends Component {

    componentDidMount() {
        this.props.fetchInitialData();
    }

    render() {
        return (
            <Switch>
                <Fragment>
                    <LoadingBar />
                    <HeaderContainer/>
                    <Route exact path='/' render={props => <Home
                        {...props}
                        handleRemovePost={this.props.removePost}
                    />}/>
                    <Route exact path='/:category' render={props => <Home
                        {...props}
                        handleRemovePost={this.props.removePost}
                    />}/>
                    <Route exact path='/:category/:postId' render={props => <ViewPost
                        {...props}
                        categories={this.props.categories}
                        handleRemoveComment={this.props.removeComment}
                    />}/>
                    <Route exact path='/add-post' render={props => <AddPost
                        {...props}
                        categories={this.props.categories}
                        handleSavePost={this.props.savePost}
                    />}/>
                    <Route exact path='/:category/:postId/edit' render={props => <EditPost
                        {...props}
                        posts={this.props.posts}
                        categories={this.props.categories}
                        handleEditPost={this.props.editPost}
                    />}/>
                    <Route exact path='/:category/:postId/add-comment' render={props => <AddComment
                        {...props}
                        categories={this.props.categories}
                        handleSaveComment={this.props.saveComment}
                    />}/>
                    <Route exact path='/:category/:postId/:commentId/edit-comment' render={props => <EditComment
                        {...props}
                        getCommentById={this.props.getCommentById}
                        comment={this.props.comment}
                        categories={this.props.categories}
                        handleEditComment={this.props.editComment}
                    />}/>
                </Fragment>
            </Switch>
        )
    }
}

function mapStateToProps({categoriesReducer, postsReducer, commentsReducer}) {

    let posts = postsReducer.posts ? postsReducer.posts : [];
    let comment = commentsReducer.comment ? commentsReducer.comment : [];

    return {
        categories: categoriesReducer.categories ? categoriesReducer.categories : [],
        posts,
        comment,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchInitialData: () => {
            dispatch(handleInitialData());
        },
        savePost: postForm => {
            dispatch(savePost(postForm));
        },
        editPost: (postId, postForm) => {
            dispatch(editPost(postId, postForm));
        },
        removePost: postId => {
            dispatch(removePost(postId));
        },
        getCommentById: commentId => {
            dispatch(getCommentById(commentId));
        },
        saveComment: (postId, commentForm) => {
            dispatch(saveComment(commentForm));
        },
        editComment: (commentId, commentForm) => {
            dispatch(editComment(commentId, commentForm));
        },
        removeComment: commentId => {
            dispatch(removeComment(commentId));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

