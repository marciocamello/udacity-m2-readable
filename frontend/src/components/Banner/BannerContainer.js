import React from 'react';
import {NavLink} from "react-router-dom";

const BannerContainer = props => {

    const {posts} = props;

    return (
        <div>
            {posts && posts.length > 0 && (<div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
                    <div id="banner" className="col-md-6 px-0">
                        <h1 className="display-4 font-italic">{posts[0].title}</h1>
                        <blockquote className="blockquote">
                            <p className="mb-0 d-inline-block text-truncate">{posts[0].body}</p>
                            <footer className="blockquote-footer">{posts[0].author}</footer>
                        </blockquote>
                        <p className="lead mb-0">
                            <NavLink to={`/posts/${posts[0].id}`} exact className="text-white font-weight-bold">
                                Continue reading...
                            </NavLink>
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
};

export default BannerContainer;