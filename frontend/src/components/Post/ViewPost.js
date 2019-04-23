import React, {Component} from 'react';
import {getPost, removePost, savePostVote} from "../../actions/posts";
import connect from "react-redux/es/connect/connect";
import Post from "./Post";
import {getCommentsByPost, saveCommentVote} from "../../actions/comments";
import CategoryContainer from "../Category/CategoryContainer";

class ViewPost extends Component {

    componentDidMount() {
        const {postId} = this.props.match.params;
        this.props.showPost(postId);
        this.props.postComments(postId);
    }

    render() {
        const {categories, filterPosts, post, postId, postVote, commentVote, commentsPosts, removePost, handleRemoveComment} = this.props;
        return (
            <div className='container'>
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
        )
    }
}

function mapStateToProps({postsReducer, commentsReducer}, ownProps) {

    const post = postsReducer.post ? postsReducer.post : null;
    let commentsPosts = commentsReducer.postComments ? commentsReducer.postComments : [];
    let comment = commentsReducer.comment ? commentsReducer.comment : [];

    if (post) {
        post.commentCount = commentsPosts.length;
    }

    return {
        post,
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