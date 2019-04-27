import React from 'react';
import Octicon, {Pencil} from "@githubprimer/octicons-react";
import {Link} from "react-router-dom";

const EditCommentButton = props => {

    const {commentId,category,postId} = props;

    return (
        <Link to={`/${category}/${postId}/${commentId}/edit-comment`}>
            <button className="btn btn-sm btn-outline-success float-right mr-2">
                <Octicon icon={Pencil}/> Edit
            </button>
        </Link>
    )
};

export default EditCommentButton;