<?php
declare(strict_types=1);

// WeatherDataApi2 SDK utility: feature_add

class WeatherDataApi2FeatureAdd
{
    public static function call(WeatherDataApi2Context $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
