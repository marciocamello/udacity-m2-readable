import React from 'react';
import ListPosts from "./ListPosts";

const PostContainer = props => {

    const {posts, onPostVote} = props;

    return (
        <div className="row mb-2">
            <ListPosts
                posts={posts}
                onPostVote={onPostVote}
            />
        </div>
    )
};

export default PostContainer;