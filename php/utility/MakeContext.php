<?php
declare(strict_types=1);

// WeatherDataApi2 SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class WeatherDataApi2MakeContext
{
    public static function call(array $ctxmap, ?WeatherDataApi2Context $basectx): WeatherDataApi2Context
    {
        return new WeatherDataApi2Context($ctxmap, $basectx);
    }
}
