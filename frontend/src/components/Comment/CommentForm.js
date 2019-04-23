import React, {Component} from 'react';
import {NavLink, Redirect} from "react-router-dom";
import generateUID from "../../utils/GenerateUUID";

class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };
    }

    handleOnSaveComment(e) {

        e.preventDefault();

        const commentData = {
            author: this.props.comment.author,
            parentId: this.props.comment.parentId,
            body: e.target.body.value
        };

        if (this.props.post) {

            //this.props.onEditComment(this.props.commentId, commentData);

        } else {
            commentData.id = generateUID();
            commentData.timestamp = new Date().getTime();
            //this.props.onSaveComment(commentData);
        }

        this.setState({redirect: true});
    }

    render() {

        const {comment, category, postId} = this.props;
        const {redirect} = this.state;

        return (
            <form onSubmit={e => this.handleOnSaveComment(e)}>
                <div className="form-group">
                    <label htmlFor="body" className='label-control'>Body</label>
                    <input
                        type="text"
                        name="body"
                        className='form-control'
                        defaultValue={comment ? comment.body : ''}
                        ref={this.body}
                        required
                    />
                </div>
                <div className="form-group">
                    <button className={comment ? 'btn btn-info mr-2' : 'btn btn-success mr-2'} type="submit">
                        {comment ? 'Update' : 'Save'}
                    </button>
                    <
                        NavLink to={`/${category}/${postId}`} exact>
                        <button type="button" className="btn btn-danger">
                            Back To Post
                        </button>
                    </NavLink>
                </div>
                {redirect && (
                    <Redirect exact to={`/${category}/${postId}`}/>
                )}
            </form>
        )
    }
}

export default CommentForm;