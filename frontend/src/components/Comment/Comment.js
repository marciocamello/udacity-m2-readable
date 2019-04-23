import React from 'react';
import FormatDate from "../../utils/FormatDate";
import CommentVote from "./CommentVote";
import RemoveCommentButton from "./RemoveCommentButton";
import EditCommentButton from "./EditCommentButton";

const Comment = props => {

        const {comment, category, onCommentVote, onRemoveComment} = props;

    return (
        <React.Fragment>
            {comment && (
                <div className="card mb-2 shadow-sm">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-10">
                                <div className="justify-content-left">
                                    <p className='h3'>{comment.title}</p>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="row">
                                    <EditCommentButton
                                        commentId={comment.id}
                                        category={category}
                                        postId={comment.parentId}
                                    />
                                    <RemoveCommentButton
                                        commentId={comment.id}
                                        onRemoveComment={onRemoveComment}
                                    />
                                </div>
                            </div>
                        </div>
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