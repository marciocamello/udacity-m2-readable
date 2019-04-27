# Readble Project

### UDACITY React Developer

## Description

Readable is simple post and comments application, with voting on post and comments

## Features

* List post categories

   - All <br>
   - React <br>
   - Redux <br>
   - Udacity <br>

* Create new posts

* Edit existing posts

* Delete post

* Vote existing post

* Add comment to post

* Edit comment

* Remove comment

* Vote comment

## Developer

### Structure

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
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── api/ReadableAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── components # Helpful images for your app. Use at your discretion.
    │   ├── Loading.js # Custom loading to use in async requests
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Docs

- Docs to this repository in github pages

https://marciocamello.github.io/udacity-m2-readable/

- Local docs

[Description](frontend/docs/main.md) <br>
[Features](frontend/docs/features.md) <br>
[Structure](frontend/docs/structure.md) <br>
[Instructions to Run Application](frontend/docs/run.md) <br>
[Instructions to Run Tests](frontend/docs/test.md) <br>
[Instructions to Generate Docs by VuePressJS](frontend/docs/docs.md)
