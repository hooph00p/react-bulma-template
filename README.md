React and Bulma Template
========================

- Requires Node v4.2.4
- Webpack has to be installed globally (`npm i -g webpack`) in order to use `npm run build`.

Getting Started
===============

### 1. Clone the Repository
```
    $ git clone https://github.com/hooph00p/react-bulma-template
```

### 2. Install Node Dependencies
```
    $ npm i
```

### 3. Globally Install Webpack
This is so you can call `webpack` from the command-line.
```
    $ npm i -g webpack
```

### 4. Run the `build` command

This runs `scripts` -> `build` from within `package.json`. This calls the global `webpack` command installed on #3.

```
    $ npm run build
```

### 5. Run the `server` command

This runs `scripts` -> `build` from within `package.json`. This runs `node` against the `index.js` file.

```
    $ npm run server
```

File Drilldown (TODO)
=====================

### HTML Index
*File: src/index.html*

Here we'll be mounting our [React]() App to. Using [html-webpack-plugin](), we can pass a model to the file.

---

### React
*File: src/main.js*

Here we'll write our main [React]() App. By default, we import `style.sass` and [Bulma]() into the App.

---

### SASS Style Sheet
*File: src/style.sass*
SASS Stylesheet enables variables and functional stylesheet development.

---

### Node Package
*File: package.json*

**Project-Dependent Field Defaults**:

| Field | Value |
| -- | -- |
| name | react-bulma-template |
| title | Hello World |
| author | Jared Hooper (@hooph00p) |

**Repository-Specific Fields**:
- repository, url
- bugs, url,
- homepage 

---

### Git Ignore File
*File: .gitignore*

This ignores the build folder and the dependencies installed by node. Because we're building through webpack, we only need `bundle.js` generated in the `bin`.

---

### Webpack
*File: webpack.config.js*

Here you can see all the file loaders we'll use to create `bundje.js` in the `bin`.

---