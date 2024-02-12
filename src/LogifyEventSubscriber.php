<?php

namespace SoMany\NovaLogify;

use Illuminate\Events\Dispatcher;
use Illuminate\Log\Events\MessageLogged;

class LogifyEventSubscriber
{
    public DriverInterface $driver;


    public function subscribe(Dispatcher $events): void {}
}
