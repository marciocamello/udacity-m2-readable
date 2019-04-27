import React from 'react';
import ListPosts from "./ListPosts";

const PostContainer = props => {

    const {posts, onPostVote, onRemovePost} = props;

    return (
        <div id="list-posts" className="row mb-2">
            <ListPosts
                posts={posts}
                onPostVote={onPostVote}
                onRemovePost={onRemovePost}
            />
        </div>
    )
};

export default PostContainer;