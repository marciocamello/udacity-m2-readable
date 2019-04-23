import React, {Component} from 'react';
import {NavLink,Redirect} from "react-router-dom";
import generateUID from "../../utils/GenerateUUID";

class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };
    }

    handleOnSavePost(e) {

        e.preventDefault();

        const postData = {
            title: e.target.title.value,
            body: e.target.body.value,
            category: e.target.category.value,
        };

        if (this.props.post) {

            this.props.onEditPost(this.props.postId, postData);

        } else {
            postData.id = generateUID();
            postData.timestamp = new Date().getTime();
            this.props.onSavePost(postData);
        }

        this.setState({redirect: true});
    }

    render() {

        const {post, categories} = this.props;
        const {redirect} = this.state;

        return (
            <form onSubmit={e => this.handleOnSavePost(e)}>
                <div className="form-group">
                    <label htmlFor="category" className='label-control'>Category</label>
                    <select name="category" defaultValue={post ? post.category : ''} className='form-control'
                            ref={this.category} required>
                        {categories && categories.length > 0 && (
                            categories.map(category => (
                                <option
                                    key={category.name}
                                    value={category.name}
                                >{category.name}</option>
                            ))
                        )}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="title" className='label-control'>Title</label>
                    <input type="text" defaultValue={post ? post.title : ''} name="title" className='form-control'
                           ref={this.title} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="body" className='label-control'>Body</label>
                    <input
                        type="text"
                        name="body"
                        className='form-control'
                        defaultValue={post ? post.body : ''}
                        ref={this.body}
                        required
                    />
                </div>
                <div className="form-group">
                    <button className={post ? 'btn btn-info mr-2' : 'btn btn-success mr-2'} type="submit">
                        {post ? 'Update' : 'Save'}
                    </button>
                    <
                        NavLink to='/' exact>
                        <button type="button" className="btn btn-danger">Cancel</button>
                    </NavLink>
                </div>
                {redirect && (
                    <Redirect exact to={'/'}/>
                )}
            </form>
        )
    }
}

export default PostForm;