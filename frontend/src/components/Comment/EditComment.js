import React, {Component} from 'react';
import CommentForm from "./CommentForm";
import {withRouter} from "react-router-dom";
import CategoryContainer from "../Category/CategoryContainer";

class EditComment extends Component {

    componentDidMount() {
        const {commentId} = this.props.match.params;
        this.props.getCommentById(commentId);
    }

    render() {

        const {comment, categories, handleSaveComment, handleEditComment} = this.props;
        const {category, postId, commentId} = this.props.match.params;

        return (
            <div className="container">
                <CategoryContainer
                    categories={categories}
                    filterPosts={false}
                />
                <h1>{comment ? 'Update Comment' : 'Create New Comment'}</h1>
                <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                        <CommentForm
                            comment={comment}
                            commentId={commentId}
                            category={category}
                            postId={postId}
                            onSaveComment={handleSaveComment}
                            onEditComment={handleEditComment}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(EditComment);