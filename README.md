# Readble Project

### UDACITY React Developer

## Description

## Features

## Developer

### Structure

```
Frontend
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

## Instructions to Run Application

### Install Dependencies

```bash
npm i or yarn
```

### Run application

- Development

```bash
npm run start or yarn start
```

- Access to development Application

```bash
http://localhost:3000
```

- Production

```bash
npm run build or yarn build
```

This folder .build has generated, here contain your production files, and you can upload to your server.

## Instructions to Run Tests

```bash
npm run cypress or yarn cypress
```

After open cypress tab, you can choice any test to run or run all tests to this application

## Instructions to Generate Docs by VuePressJS

- Development

```bash
npm run dev-docs or yarn dev-docs
```

- Access to development docs

```bash
http://localhost:8081
```

- Production

```bash
npm run build-docs or yarn build-docs
```

The docs files is generated in ./build/static/docs

- Access to production Application

```bash
http://your_host/docs
```

- Deploy docs

```bash

# navigate into the build output directory
cd ./build/static/docs

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

```

- Docs to this repository in github pages

https://marciocamello.github.io/udacity-m2-readable/

