import React from 'react';
import Octicon, {Thumbsdown, Thumbsup} from "@githubprimer/octicons-react";

const PostVote = props => {

    const {post, onPostVote} = props;

    return (
        <React.Fragment>
            <span className={post.voteScore > 0 ? 'btn btn-sm btn-success mr-2' : 'btn btn-sm btn-danger mr-2'} >
                Vote Score {post.voteScore}
            </span>
            <button className="btn btn-sm btn-outline-success mr-2" onClick={() => onPostVote(post.id, 'upVote')}>
                <Octicon icon={Thumbsup}/>
            </button>
            <button className="btn btn-sm btn-outline-danger" onClick={() => onPostVote(post.id, 'downVote')}>
                <Octicon icon={Thumbsdown}/>
            </button>
        </React.Fragment>
    )
};

export default PostVote;