import React from 'react';
import Octicon, {Thumbsdown, Thumbsup} from "@githubprimer/octicons-react";

const CommentVote = props => {

    const {comment, onCommentVote} = props;

    return (
        <React.Fragment>
            <span className={comment.voteScore > 0 ? 'btn btn-sm btn-success mr-2' : 'btn btn-sm btn-danger mr-2'} >
                Vote Score {comment.voteScore}
            </span>
            <button className="btn btn-sm btn-outline-success mr-2" onClick={() => onCommentVote(comment.id, 'upVote')}>
                <Octicon icon={Thumbsup}/>
            </button>
            <button className="btn btn-sm btn-outline-danger" onClick={() => onCommentVote(comment.id, 'downVote')}>
                <Octicon icon={Thumbsdown}/>
            </button>
        </React.Fragment>
    )
};

export default CommentVote;