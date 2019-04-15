# Helpers

[[toc]]

## Available Methods

*   [env](#env)
*   [asset](#method-array-collapse)
*   [now](#method-array-divide)

### `env()`

The `env` function retrieves the value of an environment variable or returns a default value of your `netro/.env` file:

```php
$env = env('APP_ENV');

// Returns 'production' if APP_ENV is not set...
$env = env('APP_ENV', 'production');
```

### `asset()`

The `asset` function generates a URL for an asset of your `netro/asset` directory:

```php
$url = asset('img/photo.jpg', false);

// Adds a version id for development
$url = asset('dist/app.css', true);
```

### `now()`

The `now` function creates a [Carbon](https://github.com/briannesbitt/Carbon) instance with the current time:

```php
$now = now();
```