# Structure

```
api
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── server.js # Server instance
├── config.js # Server settings params
├── categories.js # Categories methods from API
├── posts.js # Posts methods from API
├── comments.js # Comments methods from API

frontend
├── README.md - This file.
├── cypress # Is a tool to test this application
├── docs # Is a tool to generate docs using VuePressJS
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── api
        |── ReadableAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── utils # Util functions to use
        ├── GenerateUUID.js
        ├── FormatDate.js
    ├── reducers # Reducers integrated with API
        ├── categories.js
        ├── comments.js
        ├── index.js
        ├── posts.js
    ├── middleware # Middleware's in use in application
        ├── index.js
        ├── logger.js
    ├── actions # Types and all actions to mutation states
        ├── categories.js
        ├── comments.js
        ├── posts.js
        ├── shared.js
    ├── components # Helpful images for your app. Use at your discretion.
        ├── Banner # Initial banner contain a first post by category
            ├── BannerContainer.js
        ├── Category # List all categories to menu
            ├── Category.js
            ├── CategoryContainer.js
            ├── ListCategories.js
        ├── Comment # List, add, edit, vote and remove comments
            ├── AddComment.js
            ├── Comment.js
            ├── CommentContainer.js
            ├── CommentForm.js
            ├── CommentVote.js
            ├── EditComment.js
            ├── EditCommentButton.js
            ├── ListComments.js
            ├── RemoveCommentButton.js
        ├── Header #
            ├── HeaderContainer.js
        ├── Pages # Home page with all posts and banner
            ├── Home.js
        ├── Post # List, add, edit, vote and remove posts, and list comments by post
            ├── AddPost.js
            ├── EditPost.js
            ├── EditPostButton.js
            ├── ListPosts.js
            ├── Post.js
            ├── PostContainer.js
            ├── PostForm.js
            ├── PostLink.js
            ├── PostVote.js
            ├── RemovePostButton.js
            ├── ViewPost.js
        ├── App.js # This is the root of your app. Contains static HTML right now.
    │   ├── Loading.js # Custom loading to use in async requests
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```
