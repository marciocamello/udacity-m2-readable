import React, {Component} from 'react';
import CommentForm from "./CommentForm";
import {withRouter} from "react-router-dom";
import CategoryContainer from "../Category/CategoryContainer";

class AddComment extends Component {

    render() {

        const {categories, handleSavePost} = this.props;
        const {postId} = this.props.match.params;

        return (
            <div className="container">
                <CategoryContainer
                    categories={categories}
                    filterPosts={false}
                    hideCreatePost={true}
                />
                <h1>Create New Comment</h1>
                <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                        <CommentForm
                            postId={postId}
                            onSavePost={handleSavePost}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(AddComment);