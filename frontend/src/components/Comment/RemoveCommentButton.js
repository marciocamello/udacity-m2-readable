import React, {Component} from 'react';
import Octicon, {Trashcan} from "@githubprimer/octicons-react";
import {withRouter} from "react-router-dom";

class RemoveCommentButton extends Component{

    render () {

        const {commentId, onRemoveComment} = this.props;

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
            </div>
        )
    }
}

export default withRouter(RemoveCommentButton);