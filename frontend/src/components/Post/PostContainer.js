import React from 'react';
import ListPosts from "./ListPosts";
import RemovePost from "./RemovePost";

const PostContainer = props => {

    const {posts, onPostVote, onRemovePost} = props;

    return (
        <div className="row mb-2">
            <ListPosts
                posts={posts}
                onPostVote={onPostVote}
                onRemovePost={onRemovePost}
            />
        </div>
    )
};

export default PostContainer;