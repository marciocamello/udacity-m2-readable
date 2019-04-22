import React, {Component} from 'react';
import PostForm from "./PostForm";
import {withRouter} from "react-router-dom";
import CategoryContainer from "../Category/CategoryContainer";

class EditPost extends Component{

    render () {

        const {posts, categories, handleSavePost, handleEditPost} = this.props;
        const {postId} = this.props.match.params;
        const post = posts.find(p => p.id === postId);

        return (
            <div className="container">
                <CategoryContainer
                    categories={categories}
                    filterPosts={false}
                />
                <h1>{postId ? 'Update Post' : 'Create New Post'}</h1>
                <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                        <PostForm
                            postId={postId}
                            post={post}
                            onSavePost={handleSavePost}
                            onEditPost={handleEditPost}
                            categories={categories}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(EditPost);