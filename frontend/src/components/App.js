import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import API from '../api/ReadableAPI';

// components
import HeaderContainer from '../components/Header/HeaderContainer';
import ViewPost from "./Post/ViewPost";
import Home from "./Pages/Home";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            posts: [],
            comments: []
        };
    }

    componentDidMount() {
        this.fetchCategories();
        this.fetchPosts();
    }
    async fetchCategories() {
        const categories = await API.categories();
        this.setState(categories);
    }

    async fetchPosts() {
        const posts = await API.posts();
        this.setState(posts);
    }

    render() {
        const {categories, posts} = this.state;
        return (
            <Router>
                <Fragment>
                    <HeaderContainer/>
                    <Route path='/' exact render={(props) => <Home
                        {...props}
                        categories={categories}
                        posts={posts}
                    />}/>
                    <Route path='/:id/posts' exact render={(props) => <Home
                        {...props}
                        categories={categories}
                        posts={posts}
                    />}/>
                    <Route path='/posts/:id' component={ViewPost}/>
                </Fragment>
            </Router>
        )
    }
}

App.propTypes = {
    //classes: PropTypes.object.isRequired
};

export default App;

