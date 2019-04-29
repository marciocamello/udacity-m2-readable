import React, {Component} from 'react';
import CategoryContainer from "../Category/CategoryContainer";
import BannerContainer from "../Banner/BannerContainer";
import PostContainer from "../Post/PostContainer";
import connect from "react-redux/es/connect/connect";
import {filterPosts, savePostVote} from "../../actions/posts";
import Post from "../Post/Post";
import Page404 from "../Post/Page404";

class Home extends Component {

    handleFilterPosts = (e) => {
        const filter = e.target.value;
        this.props.filterPosts(this.props.posts, filter);
    };

    render() {

        const {posts, categories, loadingBar, postVote, handleRemovePost} = this.props;

        return (
            <main role="main" className="flex-shrink-0">
                <div className="container">
                    {loadingBar.default === 0 && (
                        <div>
                            {posts.length > 0 ? (
                                <div>
                                    {this.props.match.params.category !== 'add-post' && (
                                        <CategoryContainer
                                            categories={categories}
                                            filterPosts={this.handleFilterPosts}
                                        />
                                    )}
                                    <BannerContainer
                                        posts={posts}
                                    />
                                    <PostContainer
                                        posts={posts}
                                        onPostVote={postVote}
                                        onRemovePost={handleRemovePost}
                                    />
                                </div>
                            ) : (
                                <Page404
                                    categories={categories}
                                    filterPosts={true}
                                    page="Don't exist posts to this category"
                                />
                            )}
                        </div>
                    )}
                </div>
            </main>
        )
    }
}

const mapStateToProps = ({loadingBar, categoriesReducer, postsReducer, commentsReducer}, ownProps) => {

    const {category} = ownProps.match.params;
    let filteredPosts = postsReducer.posts ? postsReducer.posts : [];
    let post = postsReducer.post ? postsReducer.post : [];
    let commentsPosts = commentsReducer.postComments ? commentsReducer.postComments : [];

    if (category) {
        filteredPosts = filteredPosts.filter(post => post.category === category);
    }

    return {
        loadingBar,
        categories: categoriesReducer.categories ? categoriesReducer.categories : [],
        posts: filteredPosts.map(p => {
            if (post.id === p.id) {
                p.voteScore = post.voteScore;
                p.commentCount = post.commentCount;
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