<?php
declare(strict_types=1);

// WeatherDataApi2 SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class WeatherDataApi2Features
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new WeatherDataApi2BaseFeature();
            case "test":
                return new WeatherDataApi2TestFeature();
            default:
                return new WeatherDataApi2BaseFeature();
        }
    }
}
