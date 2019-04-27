import React from 'react';
import { NavLink } from 'react-router-dom';

const PostLink = props => {

    const {postId,postCategory} = props;

    return (
        <React.Fragment>
            {postId && (
                <div className="btn-group">
                    <NavLink to={`/${postCategory}/${postId}`} exact>
                        <button id="show-post" type="button" className="btn btn-sm btn-outline-success">View</button>
                    </NavLink>
                </div>
            )}
        </React.Fragment>
    )
};

export default PostLink;