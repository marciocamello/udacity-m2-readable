import React, { Component } from 'react';
import CategoryContainer from "../Category/CategoryContainer";
import BannerContainer from "../Banner/BannerContainer";
import PostContainer from "../Post/PostContainer";

const Home = props => {

    const {categories, posts} = props;

    const filterPosts = () => {
        const { id } = props.match.params;
        return id
            ? posts.filter(post => post.category === id)
            : posts;
    };

    return (
        <main role="main" className="flex-shrink-0">
            <div className="container-fluid">
                <CategoryContainer
                    categories={categories}
                />
                <BannerContainer
                    posts={filterPosts()}
                />
                <PostContainer
                    posts={posts}
                />
            </div>
        </main>
    )
};

export default Home;