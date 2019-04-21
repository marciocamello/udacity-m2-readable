import React from 'react';
import Post from "./Post";

const ListCategories = props => {

    const {categories, posts, onPostVote} = props;

    return (
        <React.Fragment>
            {posts.length > 0 && posts.map(post => (
                <Post
                    key={post.id}
                    categories={categories}
                    post={post}
                    onPostVote={onPostVote}
                />
            ))}
        </React.Fragment>
    )
};

export default ListCategories;