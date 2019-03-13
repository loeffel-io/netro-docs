# Commands

[[toc]]

## Introduction

Netro commands provides you a powerful and beautiful way to handle your cli commands. 
It provides a number of helpful commands that can assist you while you build your application.

Every command also includes a "help" screen which displays and describes the command's available arguments and options.

```bash
./vendor/bin/wp make:type --help
```

::: warning Info
The wp cli binary is located in the netro plugin directory `wp-content/plugins/netro` `vendor/bin/wp`
:::

## Writing commands

You may also build your own custom commands. Commands are typically stored in the `netro/Console/Command` directory in your `theme` directory.

### Generating Commands

To create a new command, use the `make:command` command. This command will create a new command class in the `netro/Console/Commands` directory. Don't worry if this directory does not exist in your application, since it will be created the first time you run the  make:command command. The generated command will include the default set of properties and methods that are present on all commands:

```bash
./vendor/bin/wp make:command SendEmail
```

### Command Structure

After generating your command, you should fill in the `command` and `description` properties of the class, which will be used when displaying your command on the help screen. The `run` method will be called when your command is executed. You may place your command logic in this method.

```php
<?php

namespace Netro\Console\Command;

use Netro\Console\Console;
use Netro\Support\Mail;

class SendEmail extends Console
{
    public $command = 'send:email {email}';

    public $description = 'Send email to a user';

    /**
     * @param Mail $mail
     */
    public function run(Mail $mail)
    {
        $mail->to($this->arguments()[0])
            ->subject('foo')
            ->message('bla')
            ->send();

        $this->success('Send email successfully');
    }
}
```

## Enabling commands

You have to enable your commands in your theme `netro/app.php` file. All dependencies from the `__construct` or `run` method will be resolved automatically.

```php
<?php

return [
    "commands" => [
        \Netro\Console\Command\SendEmail::class,
    ],
];
``` 

## Running commands

Now you can run this command.

```bash
./vendor/bin/wp send:email foo@example.com
```