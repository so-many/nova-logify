<?php

namespace SoMany\NovaLogify;

use Carbon\Carbon;
use Illuminate\Log\Events\MessageLogged;
use Illuminate\Support\Collection;
use SoMany\NovaLogify\Enums\Rotation;

class FileDriver implements DriverInterface
{
    public string $path;


    /**
     * @var Collection
     */
    public $logs;

    public function __construct()
    {
        $this->path = self::getLogPathBasedOnRotation();
        $this->logs = collect([]);
    }

    public static function getLogPathBasedOnRotation(): string
    {
        $rotation = Rotation::from(config('nova-logify.rotation'));
        $filename = $rotation->value . '_' . self::getRotationDatePath($rotation, now());
        $filename = $filename . '.log';
        return storage_path('logs/logify_') . $filename;
    }

    public static function getRotationDatePath(Rotation $rotation, Carbon $date): string
    {
        switch ($rotation) {
            case Rotation::DAILY:
                $filename = $date->format('Y-m-d');
                break;
            case Rotation::WEEKLY:
                $filename = $date->startOfWeek()->format('Y-m-d');
                break;
            case Rotation::MONTHLY:
                $filename = $date->format('Y-m');
                break;
            case Rotation::YEARLY:
                $filename = $date->format('Y');
                break;
        }
        return $filename;
    }

    public function write(MessageLogged $message)
    {
        file_put_contents(
            $this->path,
            $this->getLogText($message) . PHP_EOL,
            FILE_APPEND
        );
    }

    public function getLogCount(): int
    {
        if ($this->runsOnWindows()) {
            return $this->countFileLinesOnNonUnix();
        } else {
            return $this->countFileLinesOnUnix();
        }
    }

    public function runsOnWindows(): bool
    {
        return strtoupper(substr(PHP_OS, 0, 3)) === 'WIN';
    }

    public function countFileLinesOnNonUnix(): int
    {
        $linecount = 0;
        $handle = fopen($this->path, "r");
        while(!feof($handle)) {
            $line = fgets($handle, 4096);
            $linecount = $linecount + substr_count($line, PHP_EOL);
        }

        fclose($handle);
        return $linecount;
    }

    public function countFileLinesOnUnix(): int
    {
        return intval(exec("wc -l " . $this->path));
    }

    public function getAllLogs(): Collection
    {
        $files = glob(storage_path('logs/logify_') . '*.log');
        $this->logs = collect([]);
        foreach ($files as $file) {
            $this->logs = $this->logs->merge(file($file));
        }
        return $this->logs;
    }

    public function getAllRotationLogs(): Collection
    {
        $this->logs = collect(file($this->path));
        return $this->logs;
    }

    public function clearAllLogs(): void
    {
        file_put_contents($this->path, '');
    }

    public function getLogText(MessageLogged $message): string
    {
        return strtr(
            "[date-:date] [level-:level] :message",
            [
                ':date' => now(),
                ':level' => $message->level,
                ':message' => json_encode([
                    'message' => $message->message,
                    'context' => $message->context,
                ]),
            ]
        );
    }

    public function tailLogs(int $lines): array
    {
        return explode(PHP_EOL, $this->tailCustom($this->path, $lines));
    }

    /**
     * refer to https://stackoverflow.com/a/15025877/14491301
     */
    public function tailCustom($filepath, $lines = 1, $adaptive = true): string
    {

        $f = @fopen($filepath, "rb");
        if ($f === false) {
            return false;
        }

        if (!$adaptive) {
            $buffer = 4096;
        } else {
            $buffer = ($lines < 2 ? 64 : ($lines < 10 ? 512 : 4096));
        }

        fseek($f, -1, SEEK_END);

        if (fread($f, 1) != "\n") {
            $lines -= 1;
        }

        $output = '';
        $chunk = '';

        while (ftell($f) > 0 && $lines >= 0) {

            $seek = min(ftell($f), $buffer);

            fseek($f, -$seek, SEEK_CUR);

            $output = ($chunk = fread($f, $seek)) . $output;

            fseek($f, -mb_strlen($chunk, '8bit'), SEEK_CUR);

            $lines -= substr_count($chunk, "\n");

        }

        while ($lines++ < 0) {
            $output = substr($output, strpos($output, PHP_EOL) + 1);
        }
        fclose($f);
        return trim($output);
    }
}
