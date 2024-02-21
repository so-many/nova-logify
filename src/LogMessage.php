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
     * @var int
     */
    public $line;

    /**
     * Create a new event instance.
     *
     * @param  string  $level
     * @param  string  $message
     * @param  array  $context
     * @return void
     */
    public function __construct($level, $message, int $line, array $context = [], $date = null)
    {
        $this->level = $level;
        $this->message = $message;
        $this->context = $context;
        $this->line = $line;
        $this->date = $date;
    }
}
