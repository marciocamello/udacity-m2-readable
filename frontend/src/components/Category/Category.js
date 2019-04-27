import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = props => {
    const { category } = props;
    return (
        <li className="nav-item">
            <NavLink id={`${category.name}-category`} to={`/${category.name}`} exact activeClassName='active' className="nav-link">
                {category.name.toUpperCase()}
            </NavLink>
        </li>
    )
};

export default Category;