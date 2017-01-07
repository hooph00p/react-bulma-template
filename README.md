# React and Bulma Template

Requirement | Version
-- | --
Node | 4.2.4
Webpack | 1.14.0

* Webpack has to be installed globally (`npm i -g webpack`) in order to use `npm run build`.

# Getting Started

## 1. Clone the Repository
```
    $ git clone https://github.com/hooph00p/react-bulma-template
```

## 2. Install Node Dependencies
```
    $ npm i
```

## 3. Globally Install Webpack
This is so you can call `webpack` from the command-line.
```
    $ npm i -g webpack
```

## 4. Run the `build` command

This runs `scripts` -> `build` from within `package.json`. This calls the global `webpack` command installed on #3.

```
    $ npm run build
```

## 5. Run the `server` command

This runs `scripts` -> `build` from within `package.json`. This runs `node` against the `index.js` file.

```
    $ npm run server
```

# ( TODO ) File Drilldown

## - HTML Index ( index.html )

Here we'll be mounting our [React]() App to. Using [html-webpack-plugin](), we can pass a model to the file.

## - React Entry ( main.js )

Here we'll write our main [React]() App. By default, we import `style.sass` and [Bulma]() into the App.

## - SASS Stylesheet ( style.sass )

SASS Stylesheet enables variables and functional stylesheet development.

## - Node Package ( package.json )

**Project-Dependent Field Defaults**:

Field | Value
-- | --
name | react-bulma-template
title | Hello World
author | Jared Hooper (@hooph00p)

**Repository-Specific Fields**:
- repository, url
- bugs, url,
- homepage 

## - Git ( .gitignore )

This ignores the build folder and the dependencies installed by node. Because we're building through webpack, we only need `bundle.js` generated in the `bin`.

## - Webpack ( webpack.config.js )

Here you can see all the file loaders we'll use to create `bundje.js` in the `bin`.