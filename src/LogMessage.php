<?php

namespace SoMany\NovaLogify;

use Carbon\Carbon;

class LogMessage
{
    /**
     * @var string
     */
    public $level;

    /**
     * @var string
     */
    public $message;

    /**
     * @var array
     */
    public $context;

    /**
     * @var Carbon
     */
    public $date;

    /**
     * Create a new event instance.
     *
     * @param  string  $level
     * @param  string  $message
     * @param  array  $context
     * @return void
     */
    public function __construct($level, $message, array $context = [], $date = null)
    {
        $this->level = $level;
        $this->message = $message;
        $this->context = $context;
        $this->date = $date;
    }
}
