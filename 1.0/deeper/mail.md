# Mail

[[toc]]

Sending mails with Netro is super easy. Use the [WP Mail SMTP](https://de.wordpress.org/plugins/wp-mail-smtp/) Plugin to send your mails via SMTP.

## Send a simple mail

```php
<?php

use Netro\Facade\Support\Mail;

Mail::from('lucas@loeffel.io', 'Lucas Löffel')
    ->to('random@loeffel.io')
    ->subject('This is the subject')
    ->message('This is the message')
    ->send();
```

## Multiple Receivers

Add multiple receivers by using the `to` method.

```php
<?php

use Netro\Facade\Support\Mail;

Mail::from('lucas@loeffel.io', 'Lucas Löffel')
    ->to('random@loeffel.io', 'Random')
    ->to('another@loeffel.io')
    ...
```

## Headers

Add headers by using the `header` method.

```php
<?php

use Netro\Facade\Support\Mail;

Mail::from('lucas@loeffel.io', 'Lucas Löffel')
    ->to('random@loeffel.io')
    ->header('Content-Type: text/html; charset=UTF-8')
    ->header('X-Mailer: PHP/' . phpversion())
    ...
```