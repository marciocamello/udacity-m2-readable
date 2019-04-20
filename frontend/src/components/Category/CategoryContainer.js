import React from 'react';
import ListCategories from "./ListCategories";

const CategoryContainer = props => {

    const { categories } = props;

    return (
        <div className="nav-scroller py-1 mb-3 mt-3">
            <ListCategories
                categories={categories}
            />
        </div>
    )
};

export default CategoryContainer;