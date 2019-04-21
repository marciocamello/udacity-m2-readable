import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import generateUID from "../../utils/GenerateUUID";
import { Redirect } from 'react-router-dom';

class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    handleOnSavePost(e, onSavePost) {

        e.preventDefault();
        const postData = {
            id: generateUID(),
            title: e.target.title.value,
            body: e.target.body.value,
            author: e.target.author.value,
            category: e.target.category.value,
            timestamp: new Date().getTime(),
        };

        onSavePost(postData);
        this.setState({ redirect: true });
    }

    render() {

        const {categories, onSavePost} = this.props;
        const { redirect } = this.state;

        return (
            <form onSubmit={e => this.handleOnSavePost(e, onSavePost)}>
                <div className="form-group">
                    <label htmlFor="category" className='label-control'>Category</label>
                    <select name="category" className='form-control' ref={this.category} required>
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
                    <input type="text" name="title" className='form-control' ref={this.title} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="body" className='label-control'>Body</label>
                    <textarea name="body" className='form-control' ref={this.body} required>

                </textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="author" className='label-control'>Author</label>
                    <input type="text" name="author" className='form-control' ref={this.author} required/>
                </div>
                <div className="form-group">
                    <button className='btn btn-info mr-2' type="submit">
                        Save
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