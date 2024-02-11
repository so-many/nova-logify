<?php

namespace SoMany\NovaLogify;

use Illuminate\Events\Dispatcher;
use Illuminate\Log\Events\MessageLogged;

class LogifyEventSubscriber
{
    public DriverInterface $driver;

    public function __construct()
    {
        $driver = config('nova-logify.driver');
        if ($driver === 'file') {
            $this->driver = new FileDriver();
        } else {
            throw new \Exception("Nova logify driver not found");
        }
        app()->singleton(DriverInterface::class, function () {
            return $this->driver;
        });
    }

    public function subscribe(Dispatcher $events): void
    {
        $events->listen(MessageLogged::class, function (MessageLogged $event) {
            $this->driver->write($event);
        });
    }
}
