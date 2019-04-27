import React from 'react';
import Category from "./Category";
import {NavLink} from "react-router-dom";

const ListCategories = props => {

    const {categories, filterPosts, hideCreatePost} = props;

    return (
        <div className="inner">
            <div className="row">
                <div className="col-6">
                    <nav className="nav nav-masthead justify-content-left">
                        <li className="nav-item">
                            <NavLink to="/" exact activeClassName='active' className="nav-link">
                                All
                            </NavLink>
                        </li>
                        {categories.length > 0 && categories.map(category => (
                            <Category
                                key={category.name}
                                category={category}
                            />
                        ))}
                    </nav>
                </div>
                {!hideCreatePost && (
                    <div className={filterPosts ? 'col-3' : 'col-6'}>
                        <nav className="nav nav-masthead justify-content-end">
                            <li className="nav-item">
                                <NavLink to="/add-post" exact activeClassName='active' className={filterPosts ? 'nav-link text-uppercase' : 'nav-link text-uppercase btn btn-sm btn-primary'}>
                                    Create New Post
                                </NavLink>
                            </li>
                        </nav>
                    </div>
                )}
                {filterPosts && (<div className="col-3">
                        <nav className="nav nav-masthead justify-content-end">
                            <select className="form-control" onChange={(e) => filterPosts(e)}>
                                <option value="">All</option>
                                <option value="Date">Order By Date</option>
                                <option value="VoteScore">Order By VoteScore</option>
                            </select>
                        </nav>
                    </div>
                )}
            </div>
        </div>
    )
};

export default ListCategories;