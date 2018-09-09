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
Run this command in your Netro plugin directory `wp-content/plugins/netro`  
More informations about [commands](/1.0/deeper/commands.md)
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
  name: Tasks
  singular_name: Task
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

## Inserting, Updating & Deleting Types

### Insert

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

### Update

To update a record in the database, find a type instance, set attributes on the type, then call the update method:

```php
<?php

use \Netro\Facade\Type\Task;

$task = Task::find(1)
    ->setTitle('Updated task')
    ->update();
```

### Delete

To delete a record in the database, find a type instance, then call the delete method:

```php
<?php

use \Netro\Facade\Type\Task;

$task = Task::find(1)->delete();
```

## Events

Netro provides a few events like `saved` and `updated` with a powerful dependency resolver at your `Task.php` file.
For example, if you want to send an email notification everytime when a new type is created then just do something like this:

```php
<?php
# netro/Type/Task.php

namespace Netro\Type;

use Netro\Support\Mail;

class Task extends Type
{
    protected $postType = "task";

    public function saved(Task $task, Mail $mail)
    {
        $mail->to("customer@example.com", "Customer")
            ->from("owner@example.com", "Owner")
            ->subject("New task created")
            ->message("Task " . $task->getTitle() . " created successfully")
            ->send();
    }
}
```