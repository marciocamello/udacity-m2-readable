import React from 'react';

import FormatDate from '../../utils/FormatDate';
import PostLink from "./PostLink";
import {NavLink} from "react-router-dom";
import CommentVote from "./PostVote";
import CommentContainer from "../Comment/CommentContainer";
import RemovePostButton from "./RemovePostButton";
import EditPostButton from "./EditPostButton";

const Post = props => {

    const {post, postId, onPostVote, onCommentVote, commentsPosts, onRemovePost, onRemoveComment} = props;

    return (
        <React.Fragment>
            {post && (
                <div className="container">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-10">
                                    <div className="justify-content-left">
                                        <p className='text-muted text-uppercase'>{post.category}</p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="row">
                                        <EditPostButton
                                            postId={post.id}
                                            postCategory={post.category}
                                        />
                                        <RemovePostButton
                                            postId={post.id}
                                            onRemovePost={onRemovePost}
                                        />
                                    </div>
                                </div>
                            </div>
                            <p className={postId ? 'h1' : 'h3'}>{post.title}</p>
                            <blockquote className="blockquote">
                                {postId && (
                                    <p className="mb-0 d-inline-block text-truncate">{post.body}</p>
                                )}
                                <footer className="blockquote-footer">{post.author}</footer>
                            </blockquote>
                            <div className="d-flex justify-content-between align-items-center">
                                {!postId ? (
                                    <PostLink postId={post.id} postCategory={post.category}/>
                                ) : (
                                    <NavLink to='/' exact>
                                        <button type="button" className="btn btn-sm btn-outline-info">Back</button>
                                    </NavLink>
                                )}
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="btn btn-sm btn-info mr-2">
                                        Comments {post.commentCount}
                                    </span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <CommentVote
                                        post={post}
                                        onPostVote={onPostVote}
                                    />
                                </div>
                                <small className="text-muted">{FormatDate(post.timestamp)}</small>
                            </div>
                        </div>
                    </div>
                    {postId && (
                        <div>
                            <nav className="nav nav-masthead justify-content-end">
                                <li className="nav-item">
                                    <NavLink id="add-comment" to={`/${post.category}/${postId}/add-comment`} exact activeClassName='active' className="nav-link text-uppercase btn btn-sm btn-primary">
                                        Create New Comment
                                    </NavLink>
                                </li>
                            </nav>
                            <CommentContainer
                                commentsPosts={commentsPosts}
                                onCommentVote={onCommentVote}
                                onRemoveComment={onRemoveComment}
                                postId={postId}
                                category={post.category}
                                id="list-comments"
                            />
                        </div>
                    )}
                </div>
            )}
        </React.Fragment>
    )
};

export default Post;