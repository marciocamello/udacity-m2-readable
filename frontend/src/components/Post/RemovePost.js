import React from 'react';
import Octicon, {Trashcan} from "@githubprimer/octicons-react";

const RemovePost = props => {

    const {postId, onRemovePost} = props;

    return (
        <button className="btn btn-sm btn-outline-danger float-right" onClick={() => onRemovePost(postId)}>
            <Octicon icon={Trashcan}/> Remove
        </button>
    )
};

export default RemovePost;