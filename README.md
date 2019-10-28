# Set-up a basic JS project with babel

### Basic set-up
install node
<pre>
    mkdir my-project // create new directory
    cd my-project // navigate
    npm init // initialise
</pre>

Complete package set-up as terminal instructions
N.B. you can see and change them with the following commands on the command line:
<pre>
npm config list
npm set init.author.name "<Your Name>"
npm set init.author.email "you@example.com"
npm set init.author.url "example.com"
npm set init.license "MIT"
</pre>

Create a new file
<pre>
    mkdir src
    cd src
    touch index.js
</pre>

Add the following to your package.json 
<pre>
{
  ...
  "scripts": {
    "start": "node src/index.js", // route file
    ...
  },
  ...
}
</pre>

Add git
<pre>
    git init
</pre>

<!-- ### Add nodemon server
<pre>
...
"scripts": {
    "start": "nodemon src/index.js",
    ...
},
"devDependencies": {
    ...
    "nodemon": "^1.19.3"
}
...
</pre> -->

### Add common babel packages i.e.
Babel to let you use ES6 and JSX in your JavaScript code. Refer to [babel installation docs](https://babeljs.io/setup)
<pre>
// package.json
...
"devDependencies": {
    ...
    "@babel/preset-env": "^7.6.3",
}
...

// Terminal
touch .babelrc

// .babelrc
{
    "presets": [
        "@babel/preset-env"
    ]
}
</pre>

### Add webpack
See [webpack documentation](https://webpack.js.org/concepts/)
```
mkdir public
cd public
touch index.html
```
install webpack
`npm install --save-dev webpack webpack-dev-server webpack-cli`

### Create webpack config
With bundlers, like webpack, you can write modular code and bundle it together into small packages to optimize load time.
(1) Use the src/index.js file as entry point to bundle it. If the src/index.js file imports other JavaScript files, bundle them as well.
(2) The bundled source code files shall result in a bundle.js file in the /public folder.
(3) The /public folder will be used to serve our application to the browser.
```
module.exports = {
  // 1
  entry: './src/index.js',
  // 2
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  // 3
  devServer: {
    contentBase: './public'
  }
};
```