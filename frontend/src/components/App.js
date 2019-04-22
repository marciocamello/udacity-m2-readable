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
import {removeComment} from "../actions/comments";
import EditPost from "./Post/EditPost";


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
                    <Route path='/:category/posts' render={props => <Home
                        {...props}
                        handleRemovePost={this.props.removePost}
                    />}/>
                    <Route path='/posts/:postId' render={props => <ViewPost
                        {...props}
                        categories={this.props.categories}
                        handleRemoveComment={this.props.removeComment}
                    />}/>
                    <Route path='/add-post' render={props => <AddPost
                        {...props}
                        categories={this.props.categories}
                        handleSavePost={this.props.savePost}
                    />}/>
                    <Route path='/edit-post/:postId' render={props => <EditPost
                        {...props}
                        posts={this.props.posts}
                        categories={this.props.categories}
                        handleEditPost={this.props.editPost}
                    />}/>
                </Fragment>
            </Switch>
        )
    }
}

function mapStateToProps({categoriesReducer, postsReducer}) {

    let posts = postsReducer.posts ? postsReducer.posts : [];

    return {
        categories: categoriesReducer.categories ? categoriesReducer.categories : [],
        posts: posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchInitialData: () => {
            dispatch(handleInitialData());
        },
        savePost: (postForm) => {
            dispatch(savePost(postForm));
        },
        editPost: (postId, postForm) => {
            dispatch(editPost(postId, postForm));
        },
        removePost: postId => {
            dispatch(removePost(postId));
        },
        removeComment: commentId => {
            dispatch(removeComment(commentId));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

