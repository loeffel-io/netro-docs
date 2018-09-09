# Types

[[toc]]

## Introduction

Netro types provides you a orm-like powerful and beautiful way to handle your [WordPress Custom Post Types](https://codex.wordpress.org/Post_Types).

## Defining Types

To get started, let's create a Type. Types typically live in the `netro/Type` directory at your theme.
All types extend `Netro\Type\Type` class.

The easiest way to create a type instance is using the make:type [wp cli command](https://wp-cli.org):

```bash
./vendor/bin/wp make:type Task Tasks
```

::: warning Info
Run this command in your Netro plugin directory. The first parameter is the singular noun. The second parameter is the plural definition.
:::

## Type Conventions

That's it - your custom post type is ready to use! Now, this command creates three simple files for you:

*   `netro/Type/Task.php`
*   `netro/Type/Task.yml`
*   `netro/Facade/Type/Task.php`
  
### Type `Task.php`

First of all the `Task.php` Type. This one is the heart of your custom post type.

```php
<?php

namespace Netro\Type;

class Task extends Type
{
    protected $postType = "task"; // slug 
}
```

### Config `Task.yml`

This file includes your custom post type configurations. You can edit this file freely like described [here](https://codex.wordpress.org/Function_Reference/register_post_type).

```yaml
public: true
show_ui: true
labels:
  name: Products
  singular_name: Product
supports:
  - title
  - thumbnail
  - editor
```

For example, when you just want to update the icon of your custom post type:

```yaml
...
show_ui: true
menu_icon: dashicons-admin-users
labels:
...
```

### Facade `Task.php`

Last but not least the facade file. This one provides you a beautiful way to access your custom post type data.
**You will never change this file.**

```php
<?php

namespace Netro\Facade\Type;

class Task extends Type
{
    protected static function getFacadeAccessor(): string
    {
        return \Netro\Type\Task::class;
    }
}
```