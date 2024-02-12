<?php

namespace SoMany\NovaLogify;

use Carbon\Carbon;
use Illuminate\Log\Events\MessageLogged;
use Illuminate\Support\Collection;

interface DriverInterface
{
    public function write(MessageLogged $message);

    public function getLogCount(): int;

    public function getAllLogs(): Collection;

    public function getAllRotationLogs(): Collection;

    public function clearAllLogs(): void;

    public function tailLogs(int $lines): array;
}
