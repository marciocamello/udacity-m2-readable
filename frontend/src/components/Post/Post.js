import React from 'react';
import { NavLink } from 'react-router-dom';

import FormatDate from '../../utils/FormatDate';

const Post = props => {

    const {post} = props;

    return (
        <React.Fragment>
            <div className="col-md">
                <div className="card mb-4 shadow-sm">
                    <div className="card-body">
                        <p className='text-muted'>{post.category}</p>
                        <p className="h3">{post.title}</p>
                        <blockquote className="blockquote">
                            <p className="mb-0 d-inline-block text-truncate">{post.body}</p>
                            <footer className="blockquote-footer">{post.author}</footer>
                        </blockquote>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <NavLink to={`/posts/${post.id}`} exact>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                </NavLink>
                            </div>
                            <small className="text-muted">{FormatDate(post.timestamp)}</small>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Post;