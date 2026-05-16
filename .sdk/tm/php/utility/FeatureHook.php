<?php
declare(strict_types=1);

// WeatherDataApi2 SDK utility: feature_hook

class WeatherDataApi2FeatureHook
{
    public static function call(WeatherDataApi2Context $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
