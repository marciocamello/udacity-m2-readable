import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import {Route} from 'react-router-dom';
import API from './API';

// Custom theme
const muiTheme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    /*palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#ff4400',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00',
        },
    },*/
    overrides: {
        MuiPaper: {
            root: {
                boxShadow: 'none'
            }
        }
    }
});

const styles = theme => ({
    root: {
        padding: 40,
        marginTop: 60
    }
});

class App extends Component {

    constructor (props) {
        super(props);
        this.state = {
            categories: [],
            posts: [],
            comments: []
        };
    }

    componentWillMount () {
        this.fetchCategories();
        this.fetchPosts();
    }

    async fetchCategories () {
        const categories = await API.categories();
        this.setState(categories);
    }

    async fetchPosts () {
        const posts = await API.posts();
        this.setState(posts);
    }

    render() {
        const { categories, posts } = this.state;
        return (
            <div>
                <h1>Readable</h1>
                <h3>Categories</h3>
                {categories.length > 0 && (
                    categories.map(category => (
                        <p key={category.name}>{category.name}</p>
                    ))
                )}
                <h3>Posts</h3>
                {posts.length > 0 && (
                    posts.map(post => (
                        <p key={post.id}>{post.title}</p>
                    ))
                )}
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);

