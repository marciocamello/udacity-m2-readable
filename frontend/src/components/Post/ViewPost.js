import React, {Component} from 'react';
import {getPost, removePost, savePostVote} from "../../actions/posts";
import connect from "react-redux/es/connect/connect";
import Post from "./Post";
import {getCommentsByPost, saveCommentVote} from "../../actions/comments";
import CategoryContainer from "../Category/CategoryContainer";
import Page404 from "./Page404";

class ViewPost extends Component {

    componentDidMount() {
        const {postId} = this.props.match.params;
        this.props.showPost(postId);
        this.props.postComments(postId);
    }

    render() {

        const {loadingBar, categories, filterPosts, post, postId, postVote, commentVote, commentsPosts, removePost, handleRemoveComment} = this.props;

        return (
            <React.Fragment>
                <div className='container'>
                    {loadingBar.default === 0 && (
                        <div>
                            {post && typeof post.id !== 'undefined' ? (
                                <div>
                                    <CategoryContainer
                                        categories={categories}
                                        filterPosts={filterPosts}
                                    />
                                    <Post
                                        post={post}
                                        postId={postId}
                                        onPostVote={postVote}
                                        commentsPosts={commentsPosts}
                                        onCommentVote={commentVote}
                                        onRemovePost={removePost}
                                        onRemoveComment={handleRemoveComment}
                                    />
                                </div>
                            ) : (
                                <Page404
                                    categories={categories}
                                    filterPosts={true}
                                />
                            )}
                        </div>
                    )}
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps({postsReducer, commentsReducer, loadingBar}, ownProps) {

    let post = postsReducer.post ? postsReducer.post : null;
    let commentsPosts = commentsReducer.postComments ? commentsReducer.postComments : [];
    let comment = commentsReducer.comment ? commentsReducer.comment : [];

    if (post) {
        post.commentCount = commentsPosts.length;
    }

    return {
        post,
        loadingBar,
        commentsPosts: commentsPosts.map(c => {
            if (comment.id === c.id) {
                c.voteScore = comment.voteScore;
            }
            return c;
        }),
        postId: ownProps.match.params.postId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showPost: postId => {
            dispatch(getPost(postId));
        },
        postVote: (postId, option) => {
            dispatch(savePostVote(postId, option));
        },
        commentVote: (commentId, option) => {
            dispatch(saveCommentVote(commentId, option));
        },
        postComments: postId => {
            dispatch(getCommentsByPost(postId));
        },
        removePost: postId => {
            dispatch(removePost(postId));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewPost)