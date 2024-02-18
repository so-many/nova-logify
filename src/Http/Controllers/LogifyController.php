<?php

namespace SoMany\NovaLogify\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use SoMany\NovaLogify\DriverInterface;

class LogifyController
{
    protected DriverInterface $driver;

    public function __construct()
    {
        $this->driver = app()->get(DriverInterface::class);
    }

    public function index(): JsonResponse
    {
        return response()->json(['data' => $this->driver->getAllLogs()]);
    }
}
