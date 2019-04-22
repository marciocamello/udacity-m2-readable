import React, {Component} from 'react';
import Octicon, {Trashcan} from "@githubprimer/octicons-react";
import {Redirect, withRouter} from "react-router-dom";

class RemoveCommentButton extends Component{

    constructor (props) {
        super(props);
        this.state = {
            redirect: false
        };
    }

    render () {

        const {post, commentId, onRemoveComment} = this.props;

        return (
            <div>
                <button className="btn btn-sm btn-outline-danger float-right" onClick={() => {
                    if (window.confirm('You are sure?')) {
                        onRemoveComment(commentId);
                        this.setState({redirect: true});
                        return true;
                    }
                }}>
                    <Octicon icon={Trashcan}/> Remove
                </button>
                {this.state.redirect && this.props.match.path === '/posts/:postId' && (
                    <Redirect exact to={'/'}/>
                )}
            </div>
        )
    }
}

export default withRouter(RemoveCommentButton);