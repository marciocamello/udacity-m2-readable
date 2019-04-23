import React, {Component} from 'react';
import PostForm from "./PostForm";
import {withRouter} from "react-router-dom";
import CategoryContainer from "../Category/CategoryContainer";

class AddPost extends Component {

    render() {

        const {categories, handleSavePost} = this.props;

        return (
            <div className="container">
                <CategoryContainer
                    categories={categories}
                    filterPosts={false}
                />
                <h1>Create New Post</h1>
                <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                        <PostForm
                            onSavePost={handleSavePost}
                            categories={categories}
                            title={this.title}
                            body={this.body}
                            author={this.author}
                            category={this.category}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(AddPost);