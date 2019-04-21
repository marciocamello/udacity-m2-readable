import React, {Component} from 'react';
import CategoryContainer from "../Category/CategoryContainer";
import BannerContainer from "../Banner/BannerContainer";
import PostContainer from "../Post/PostContainer";
import connect from "react-redux/es/connect/connect";
import {filterPosts, savePostVote, removePost} from "../../actions/posts";

class Home extends Component {

    handleFilterPosts = (e) => {
        const filter = e.target.value;
        this.props.filterPosts(this.props.posts, filter);
    };

    render() {

        const {posts, categories, postVote, handleRemovePost} = this.props;

        return (
            <main role="main" className="flex-shrink-0">
                <div className="container">
                    <CategoryContainer
                        categories={categories}
                        filterPosts={this.handleFilterPosts}
                    />
                    <BannerContainer
                        posts={posts}
                    />
                    <PostContainer
                        posts={posts}
                        onPostVote={postVote}
                        onRemovePost={handleRemovePost}
                    />
                </div>
            </main>
        )
    }
}

const mapStateToProps = ({categoriesReducer, postsReducer}, ownProps) => {

    const {category} = ownProps.match.params;
    let filteredPosts = postsReducer.posts ? postsReducer.posts : [];
    let post = postsReducer.post ? postsReducer.post : [];

    if (category) {
        filteredPosts = filteredPosts.filter(post => post.category === category);
    }

    return {
        categories: categoriesReducer.categories ? categoriesReducer.categories : [],
        posts: filteredPosts.map(p => {
            if (post.id === p.id) {
                p.voteScore = post.voteScore;
            }
            return p;
        })
    }
};

const mapDispatchToProps = dispatch => {
    return {
        filterPosts: (posts, filter) => {
            dispatch(filterPosts(posts, filter));
        },
        postVote: (postId, option) => {
            dispatch(savePostVote(postId, option));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)