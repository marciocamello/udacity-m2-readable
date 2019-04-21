import React from 'react';
import { NavLink } from 'react-router-dom';

import FormatDate from '../../utils/FormatDate';

const PostLink = props => {

    const {postId} = props;

    return (
        <React.Fragment>
            {postId && (
                <div className="btn-group">
                    <NavLink to={`/posts/${postId}`} exact>
                        <button type="button" className="btn btn-sm btn-outline-success">View</button>
                    </NavLink>
                </div>
            )}
        </React.Fragment>
    )
};

export default PostLink;