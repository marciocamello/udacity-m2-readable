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
import {removePost, savePost} from "../actions/posts";


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
                    <Route exact path='/' render={props => <Home {...props} handleRemovePost={this.props.removePost}/>}/>
                    <Route path='/:category/posts' render={props => <Home {...props} handleRemovePost={this.props.removePost}/>}/>
                    <Route path='/posts/:postId' render={props => <ViewPost {...props} categories={this.props.categories}/>}/>
                    <Route path='/add-post' render={props => <AddPost {...props} categories={this.props.categories} handleSavePost={this.props.savePost}/>}/>
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
        removePost: postId => {
            dispatch(removePost(postId));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

