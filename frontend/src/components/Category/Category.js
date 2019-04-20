import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = props => {
    const { category } = props;
    return (
        <React.Fragment>
            <NavLink to={`/${category.name}/posts`} exact activeClassName='active' className="nav-link active">
                {category.name.toUpperCase()}
            </NavLink>
        </React.Fragment>
    )
};

export default Category;