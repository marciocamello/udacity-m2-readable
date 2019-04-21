import React from 'react';
import Comment from "./Comment";

const ListComments = props => {

    const {commentsPosts, onCommentVote} = props;

    return (
        <React.Fragment>
            <h1>Comments</h1>
            {commentsPosts && commentsPosts.length > 0 && (
                commentsPosts.map(comment => (
                    <Comment
                        key={comment.id}
                        comment={comment}
                        onCommentVote={onCommentVote}
                    />
                ))
            )}
        </React.Fragment>
    )
};

export default ListComments;