# Types

[[toc]]

## Introduction

Netro types provides you a orm-like powerful and beautiful way to handle your [WordPress Custom Post Types](https://codex.wordpress.org/Post_Types).

## Defining Types

To get started, let's create a custom post type. Types typically live in the `netro/Type` directory at your theme.
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

## Retrieving Types

Once you have created a type, you are ready to start retrieving data from your wordpress database.

```php
<?php

use \Netro\Facade\Type\Task;

$tasks = Task::all();

foreach ($tasks as $task) {
    echo $task->getTitle();
}
```

### Adding Additional Constraints

```php
<?php

use \Netro\Facade\Type\Task;

$tasks = Task::whereStatus('publish')
    ->orderBy('id')
    ->limit(3)
    ->get();
```

## Retrieving Single Types

```php
<?php

use \Netro\Facade\Type\Task;

// Retrieve a type by its id...
$task = Task::find(1);

// Retrieve multiple types by there id's...
$tasks = Task::findMany([1, 2, 3]);
```

## Retrieving Type Image and Author

```php
<?php

use \Netro\Facade\Type\Task;

// Retrieve the image of a type
$task = Task::find(1)->getImage()->getPath();

// Retrieve the author of a type
$task = Task::find(1)->getAuthor()->getEmail();
```

## Inserting & Updating Types

### Inserts

To create a new record in the database, create a new type instance, set attributes on the type, then call the save method:

```php
<?php

use \Netro\Facade\Type\Task;

$task = Task::setTitle('First task')
    ->setStatus('publish')
    ->setContent('content')
    ->setCreatedAt(now())
    ->setModifiedAt(now())
    ->save();
```

You also can add an **image** or **author** to your instance:

```php
<?php

use \Netro\Facade\Type\Task;
use Netro\Support\Image;

$image = new Image();
$image->setId(10);

$task = Task::setTitle('First task')
    ->setStatus('publish')
    ->setContent('content')
    ->setImage($image)
    ->save();
```

### Updates

```php
<?php

use \Netro\Facade\Type\Task;

$task = Task::find(1)
    ->setTitle('Updated task')
    ->update();
```