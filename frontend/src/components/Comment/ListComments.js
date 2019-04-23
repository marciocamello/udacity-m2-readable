import React from 'react';
import Comment from "./Comment";

const ListComments = props => {

    const {commentsPosts, postId, category, onCommentVote, onRemoveComment} = props;

    return (
        <React.Fragment>
            {commentsPosts && commentsPosts.length > 0 && (
                <div>
                    <h1>Comments</h1>
                    {commentsPosts.map(comment => (
                        <Comment
                            key={comment.id}
                            comment={comment}
                            postId={postId}
                            category={category}
                            onCommentVote={onCommentVote}
                            onRemoveComment={onRemoveComment}
                        />
                    ))}
                </div>
            )}
        </React.Fragment>
    )
};

export default ListComments;