import React from 'react';
import Octicon, {Pencil} from "@githubprimer/octicons-react";
import {NavLink} from "react-router-dom";

const EditPostButton = props => {

    const {postId,postCategory} = props;

    return (
        <NavLink to={`/${postCategory}/${postId}/edit`}>
            <button id="edit-post" className="btn btn-sm btn-outline-success float-right mr-2">
                <Octicon icon={Pencil}/> Edit
            </button>
        </NavLink>
    )
};

export default EditPostButton;