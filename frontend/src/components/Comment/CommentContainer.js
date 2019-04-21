import React from 'react';
import ListComments from "./ListComments";

const CommentContainer = props => {

    const {commentsPosts, postId, onCommentVote} = props;

    return (
        <React.Fragment>
            <ListComments
                commentsPosts={commentsPosts}
                postId={postId}
                onCommentVote={onCommentVote}
            />
        </React.Fragment>
    )
};

export default CommentContainer;