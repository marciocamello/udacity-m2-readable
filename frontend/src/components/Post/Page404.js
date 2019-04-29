import React, {Component} from 'react';
import {withRouter, NavLink} from "react-router-dom";
import CategoryContainer from "../Category/CategoryContainer";

class Page404 extends Component {

    render() {
        const {categories, filterPosts} = this.props;

        return (
            <div className='container'>
                <CategoryContainer
                    categories={categories}
                    filterPosts={filterPosts}
                />
                <div className='container'>
                    <h1>
                        The post was not found
                    </h1>
                    <NavLink type="button" className="btn btn-danger" to="/">
                        Back
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default withRouter(Page404);