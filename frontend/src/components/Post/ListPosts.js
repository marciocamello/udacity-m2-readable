import React from 'react';
import Post from "./Post";

const ListCategories = props => {

    const {posts} = props;

    return (
        <React.Fragment>
            {posts.map(post => (
                <Post
                    key={post.id}
                    post={post}
                />
            ))}
        </React.Fragment>
    )
};

export default ListCategories;