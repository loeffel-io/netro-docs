# The Frontend

[[toc]]

## Introduction

The Netro Theme uses [Laravel Mix](https://github.com/JeffreyWay/laravel-mix) which provides a fluent API for defining Webpack build steps for your WordPress application using several common CSS and JavaScript pre-processors.
Through simple method chaining, you can fluently define your asset pipeline. If you've ever been confused and overwhelmed about getting started with Webpack and asset compilation, you will love Laravel Mix. For example:

```javascript
mix.js('./assets/js/app.js', './assets/dist')
    .sass('./assets/sass/app.scss', './assets/dist')
    .setPublicPath('./assets/dist')
```

## Installation & Setup

### Installing Node

Before triggering Mix, you must first ensure that Node.js and NPM are installed on your machine.

```bash
node -v
npm -v
```

### Installing Laravel Mix

The only remaining step is to install Laravel Mix.

```bash
npm install
```

## Running Mix

Mix is a configuration layer on top of Webpack, so to run your Mix tasks you only need to execute one of the NPM scripts that is included with the default Netro Theme `package.json` file.
All your resources will be compiled to your `assets/dist` directory.

### Run all Mix tasks

```bash
npm run dev
```

### Run all Mix tasks and minify output

```bash
npm run production
```

### Run all Mix tasks and watch for changes

```bash
npm run watch
```

## Working With Stylesheets

The `webpack.mix.js` file is your entry point for all asset compilation. Think of it as a light configuration wrapper around Webpack. Mix tasks can be chained together to define exactly how your assets should be compiled.
Everything is ready to go.

### Sass

The `app.scss` file is predefined and ready to go at your `assets/sass` directory.

### Plain CSS

If you just want to use plain css instead of using scss you just can update your `webpack.mix.js` to:

```javascript
mix.js('./assets/js/app.js', './assets/dist')
    .css('./assets/css/app.css', './assets/dist')
    .setPublicPath('./assets/dist')
```

Don't forget to create the `app.css` file at `assets/css`.

## Working With JavaScript

The `app.js` file is predefined and ready to go at your `assets/js` directory.

## Including your dist files

The Netro Theme includes your dist files already in the `header.php` and `footer.php` files:

```php
# header.php
<link rel="stylesheet" type="text/css" href="<?= asset('dist/app.css') ?>">

# footer.php
<script type="text/javascript" src="<?= asset('dist/app.js') ?>"></script>
```

## Customizations

You can find a lot of informations about customizations at the [Laravel Mix Documentation](https://laravel-mix.com/docs)

