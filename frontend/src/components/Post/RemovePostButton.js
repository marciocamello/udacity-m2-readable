import React from 'react';
import Octicon, {Trashcan} from "@githubprimer/octicons-react";

const RemovePostButton = props => {

    const {postId, onRemovePost} = props;

    return (
        <button className="btn btn-sm btn-outline-danger float-right" onClick={() => {
            if (window.confirm('You are sure?')) {
                onRemovePost(postId);
                return true;
            }
        }}>
            <Octicon icon={Trashcan}/> Remove
        </button>
    )
};

export default RemovePostButton;