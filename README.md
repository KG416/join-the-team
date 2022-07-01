# Epiceros Test

A test project assigned to me by a potential future employer <br>

_This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)_

## Prerequisites

- You need to have [node.js](https://nodejs.org/) installed

## Installation / get this app up and running

- Clone the repo
- In a terminal, run `npm install`
- To start the project in development mode, run `npm start`
- It is now running at http://localhost:3000/

## Available scripts / commands

- `npm start` - Starts in development mode

## Styling
- The CSS extension [SASS](https://sass-lang.com/) is used in this project
- Components and views have separate CSS files (modules) with locally scoped classes. _Please note that element selectors are not locally scoped._
- The `global.scss` file contains global styles and variables
- The `index.scss` file contains default settings, fonts, accessibility etc

## [Linting](https://en.wikipedia.org/wiki/Lint_%28software%29) & code [formatting](https://en.wikipedia.org/wiki/Prettyprint)

In this project `eslint` is used for linting & `prettier` is used for code formatting

[Starting point for setup](https://dev.to/s2engineers/how-to-make-eslint-work-with-prettier-avoiding-conflicts-and-problems-57pi)

## Code organisation

Code is organized into the following folders:

- **views** - The main view components, that make up the different complete views
- **components** - Reusable components, such as buttons
- **utils** - Reusable functions