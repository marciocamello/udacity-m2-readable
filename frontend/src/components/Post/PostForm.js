import React, {Component} from 'react';
import {NavLink, withRouter} from "react-router-dom";
import generateUID from "../../utils/GenerateUUID";
import {Field, reduxForm} from 'redux-form';
import connect from "react-redux/es/connect/connect";

class PostForm extends Component {

    handleOnSavePost(postData) {

        if (this.props.post) {

            this.props.onEditPost(this.props.postId, postData);

        } else {
            postData.id = generateUID();
            postData.timestamp = new Date().getTime();
            this.props.onSavePost(postData);
        }

        this.props.history.goBack();
    }

    render() {

        const {post, categories, handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(post => this.handleOnSavePost(post))}>
                <div className="form-group">
                    <label htmlFor="category" className='label-control'>Category</label>
                    <Field name="category" component="select" className='form-control' required>
                        {categories && categories.length > 0 && (
                            categories.map(category => (
                                <option
                                    key={category.name}
                                    value={category.name}
                                >{category.name}</option>
                            ))
                        )}
                    </Field>
                </div>
                <div className="form-group">
                    <label htmlFor="title" className='label-control'>Title</label>
                    <Field name="title" className='form-control' component="input" type="text"/>
                </div>
                <div className="form-group">
                    <label htmlFor="body" className='label-control'>Body</label>
                    <Field name="body" className='form-control' component="input" type="text"/>
                </div>
                <div className="form-group">
                    <label htmlFor="author" className='label-control'>Author</label>
                    <Field name="author" className='form-control' component="input" type="text"/>
                </div>
                <div className="form-group">
                    <button className={post ? 'btn btn-info mr-2' : 'btn btn-success mr-2'} type="submit">
                        {post ? 'Update' : 'Save'}
                    </button>
                    <button type="button" className="btn btn-danger" onClick={() => this.props.history.goBack()}>
                        Cancel
                    </button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state, props) => ({
    initialValues: props.post
});

export default withRouter(connect(
    mapStateToProps
)(reduxForm({
    form: 'PostForm',
    enableReinitialize: true
})(PostForm)));