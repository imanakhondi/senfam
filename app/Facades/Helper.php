<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @method static void deleteAll(string $dir)
 * @method static string localeNumbers(int|float $number)
 * @method static string randomString(int $length = 4)
 * @method static string randomNumbersString(int $length = 4)
 */
class Helper extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'helper';
    }
}
