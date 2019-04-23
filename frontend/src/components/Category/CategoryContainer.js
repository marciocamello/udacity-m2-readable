import React from 'react';
import ListCategories from "./ListCategories";

const CategoryContainer = props => {

    const {categories, filterPosts, hideCreatePost} = props;

    return (
        <div className="nav-scroller py-1 mb-3 mt-3">
            <ListCategories
                categories={categories}
                filterPosts={filterPosts}
                hideCreatePost={hideCreatePost}
            />
        </div>
    )
};

export default CategoryContainer;