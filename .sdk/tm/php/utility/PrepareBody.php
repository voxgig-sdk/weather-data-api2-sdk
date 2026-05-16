<?php
declare(strict_types=1);

// WeatherDataApi2 SDK utility: prepare_body

class WeatherDataApi2PrepareBody
{
    public static function call(WeatherDataApi2Context $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
