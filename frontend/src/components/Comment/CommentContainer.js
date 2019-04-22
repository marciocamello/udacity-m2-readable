import React from 'react';
import ListComments from "./ListComments";

const CommentContainer = props => {

    const {commentsPosts, postId, onCommentVote, onRemoveComment} = props;

    return (
        <React.Fragment>
            <ListComments
                commentsPosts={commentsPosts}
                postId={postId}
                onCommentVote={onCommentVote}
                onRemoveComment={onRemoveComment}
            />
        </React.Fragment>
    )
};

export default CommentContainer;