import React from 'react';
import Category from "./Category";

const ListCategories = props => {

    const {categories} = props;

    return (
        <React.Fragment>
            <div className="inner">
                <nav className="nav nav-masthead justify-content-center">
                    {categories.map(category => (
                        <Category
                            key={category.name}
                            category={category}
                        />
                    ))}
                </nav>
            </div>
        </React.Fragment>
    )
};

export default ListCategories;