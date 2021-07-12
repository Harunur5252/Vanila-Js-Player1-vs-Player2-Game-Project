# Player1 vs Player2 Game 
This is a simple game that's made by javaScript   

# Project Specifications

+ create a simple UI(user interface)
+ Initial state have three buttons player1 , player2 and reset 
+ when click on player1 or player2 button then increase their value and show it's value on ui
+ according to the given value in the (Playing to : value) option a player will win and at that time two player button is disabled and game over occur.
+ when game over is occur then you can reset the game.
+ through browser refresh each time a random value is add on this(Playing to : value) option.
+ Manually , you can give a number in the input field and on that time the (Playing to : value) option value will change according to the given value.

## Project Picture

![Player1 vs Player2!](/src/images/player1_vs_player2.PNG "Player1 vs Player2")


This project has been created using **[webpack-cli](https://github.com/webpack/webpack-cli)**, you can now see the project in live server using this:

```
npm run serve
```

or

```
yarn serve
```
> If you want to bundle this application ,  you can use this:

```
npm run build
```

or

```
yarn build
```



## Used Webpack
webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.

## Used Modules

The [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) statements have been standardized in ES2015. They are supported in most of the browsers at this moment, however there are some browsers that don't recognize the new syntax. But don't worry, webpack does support them out of the box.

Behind the scenes, webpack actually **"transpiles"** the code so that older browsers can also run it. If you inspect dist/main.js, you might be able to see how webpack does this, it's quite ingenious! Besides import and export, webpack supports various other module syntaxes as well, see [Module API](https://webpack.js.org/api/module-methods) for more information.

Note that webpack will not alter any code other than import and export statements. If you are using other [ES2015 features](http://es6-features.org/), make sure to [use a transpiler](https://webpack.js.org/loaders/#transpiling) such as [Babel](https://babeljs.io/) or [Bublé](https://buble.surge.sh/guide/) via webpack's [loader system](https://webpack.js.org/concepts/loaders/).



## Webpack Prerequisites
Before we begin, make sure you have a fresh version of [Node.js](https://nodejs.org/en/) installed. The current Long Term Support (LTS) release is an ideal starting point. You may run into a variety of issues with the older versions as they may be missing functionality webpack and/or its related packages require.


## Basic Setup

First let's create a directory, initialize npm, install webpack locally, and install the webpack-cli (the tool used to run webpack on the command line):

```
mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
```

Then you have to give a path for configurations using this:
```
./node_modules/.bin/webpack init
```
> ### You can install webpack Local Installation or Global Installation


## Local Installation
The latest webpack release is:

[![webpack!](https://img.shields.io/npm/v/webpack.svg?label=webpack&style=flat-square&maxAge=3600)](https://github.com/webpack/webpack/releases)

To install the latest release or a specific version, run one of the following commands:

```
 npm install --save-dev webpack
 # or specific version
 npm install --save-dev webpack@<version>
```

> Tip
>
> Whether to use --save-dev or not depends on your use cases. Say you're using webpack only for bundling, then it's suggested that you install it with --save-dev option since you're not going to include webpack in your production build. Otherwise you can ignore --save-dev.


If you're using webpack v4 or later and want to call webpack from the command line, you'll also need to install the [CLI](https://webpack.js.org/api/cli/).

```
npm install --save-dev webpack-cli
```

Installing locally is what we recommend for most projects. This makes it easier to upgrade projects individually when breaking changes are introduced. Typically webpack is run via one or more npm scripts which will look for a webpack installation in your local node_modules directory:

```
"scripts": {
  "build": "webpack --config webpack.config.js"
}
```

> Tip
>
> To run the local installation of webpack you can access its binary version as node_modules/.bin/webpack. Alternatively, if you are using npm v5.2.0 or greater, you can run npx webpack to do it.


## Global Installation

The following NPM installation will make webpack available globally:

```
npm install --global webpack
```

> Warning
>
> Note that this is not a recommended practice. Installing globally locks you down to a specific version of webpack and could fail in projects that use a different version.
















