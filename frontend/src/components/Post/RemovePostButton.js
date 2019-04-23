import React, {Component} from 'react';
import Octicon, {Trashcan} from "@githubprimer/octicons-react";
import {Redirect,withRouter} from "react-router-dom";

class RemovePostButton extends Component{

    constructor (props) {
        super(props);
        this.state = {
            redirect: false
        };
    }

    render () {

        const {postId, onRemovePost} = this.props;

        return (
            <div>
                <button className="btn btn-sm btn-outline-danger float-right" onClick={() => {
                    if (window.confirm('You are sure?')) {
                        onRemovePost(postId);
                        this.setState({redirect: true});
                        return true;
                    }
                }}>
                    <Octicon icon={Trashcan}/> Remove
                </button>
                {this.state.redirect && this.props.match.path === '/:category/:postId' && (
                    <Redirect exact to={`/`}/>
                )}
            </div>
        )
    }
}

export default withRouter(RemovePostButton);