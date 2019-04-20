import React from 'react';
import ListPosts from "./ListPosts";

const PostContainer = props => {

    const {posts} = props;

    return (
        <div className="row mb-2">
            <ListPosts
                posts={posts}
            />
        </div>
    )
};

export default PostContainer;