import React from 'react';
import FormatDate from "../../utils/FormatDate";
import CommentVote from "./CommentVote";

const Comment = props => {

    const {comment, onCommentVote} = props;

    return (
        <React.Fragment>
            {comment && (
                <div className="card mb-2 shadow-sm">
                    <div className="card-body">
                        <p className='h3'>{comment.title}</p>
                        <blockquote className="blockquote">
                            <p className="mb-0 d-inline-block text-truncate">{comment.body}</p>
                            <footer className="blockquote-footer">{comment.author}</footer>
                        </blockquote>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex justify-content-between align-items-center">
                                <CommentVote
                                    comment={comment}
                                    onCommentVote={onCommentVote}
                                />
                            </div>
                            <small className="text-muted">{FormatDate(comment.timestamp)}</small>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    )
};

export default Comment;