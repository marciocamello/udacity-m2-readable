import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import generateUID from "../../utils/GenerateUUID";
import { Field, reduxForm } from 'redux-form';
import connect from "react-redux/es/connect/connect";

class CommentForm extends Component {

    handleOnSaveComment(commentData) {

        if (this.props.comment) {

            this.props.onEditComment(this.props.commentId, commentData);

        } else {
            commentData.id = generateUID();
            commentData.timestamp = new Date().getTime();
            this.props.onSaveComment(commentData);
        }

        this.props.history.goBack();
    }

    render() {

        const {comment, handleSubmit} = this.props;

        return (
        <form onSubmit={handleSubmit(comment => this.handleOnSaveComment(comment))}>
            <div className="form-group">
                <label htmlFor="body" className='label-control'>Body</label>
                <Field name="body" className='form-control' component="input" type="text" />
            </div>
            <div className="form-group">
                <button className={comment ? 'btn btn-info mr-2' : 'btn btn-success mr-2'} type="submit">
                    {comment ? 'Update' : 'Save'}
                </button>
                <button type="button" className="btn btn-danger" onClick={() => this.props.history.goBack()}>
                    Back To Post
                </button>
            </div>
        </form>
        )
    }
}

const mapStateToProps = (state, props) => ({
    initialValues: props.comment
});

export default withRouter(connect(
    mapStateToProps
)(reduxForm({
    form: 'CommentForm',
    enableReinitialize: true
})(CommentForm)))