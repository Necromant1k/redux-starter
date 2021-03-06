# React Redux Styled Hot Universal
React boilerplate, used best practices and focus on performance

[![Build Status](https://travis-ci.org/wearepush/redux-starter.svg?branch=master&style=flat-square)](https://travis-ci.org/wearepush/redux-starter)
[![Dependency Status](https://david-dm.org/wearepush/redux-starter.svg?style=flat-square)](https://david-dm.org/wearepush/redux-starter)
[![devDependency Status](https://david-dm.org/wearepush/redux-starter/dev-status.svg?style=flat-square)](https://david-dm.org/wearepush/redux-starter?type=dev)
[![Demo on Heroku](https://img.shields.io/badge/demo-heroku-brightgreen.svg?style=flat-square)](https://wearepush-redux-starter.herokuapp.com/)

---

## About

The starter boilerplate includes the following technologies:

| Technology                                                                                                                                                                                                                  | Description                                                     |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| [React Hot Loader 3](https://github.com/gaearon/react-hot-loader)                 | Tweak React components in real time |
| [React](https://github.com/facebook/react)                                        | JavaScript library for building user interfaces  |
| [React Router](https://github.com/rackt/react-router)                             | React Router is a complete routing library for React    |
| [Babel](http://babeljs.io)                                                        | Babel is a JavaScript compiler              |
| [Webpack](http://webpack.github.io)                                               | Module bundler                       |
| [Universal Webpack](https://www.npmjs.com/package/universal-webpack)              | Helps setting up universal Webpack build: the one that's working both on client and server                                                |
| [Redux](http://redux.js.org/)                                                     | Redux is a predictable state container for JavaScript apps                           |
| [Redux Immutable](https://github.com/gajus/redux-immutablejs)                     | Redux & Immutable integration                                                          |
| [React Router Redux](https://github.com/reactjs/react-router-redux)               | Simple bindings to keep react-router and redux in sync                                        |
| [ESLint](http://eslint.org)                                                       | The pluggable linting utility for JavaScript and JSX                                            |
| [Yarn](https://yarnpkg.com) | Fast, reliable and secure dependency management |

## Installation

```bash
yarn
```

## Running Dev Server

```bash
npm run dev
```

## Running Prod Server

```bash
npm run prod
```


## Deployment on Heroku

To get this project to work on Heroku, you need to:

1. Add heroku `heroku git:remote -a wearepush-redux-starter`
2. `heroku config:set NODE_ENV=production`
3. `heroku config:set NODE_PATH=./src`
4. `heroku config:set NPM_CONFIG_PRODUCTION=false`
5. `heroku config:set NODE_MODULES_CACHE=false`
  * This is to enable webpack to run the build on deploy.
