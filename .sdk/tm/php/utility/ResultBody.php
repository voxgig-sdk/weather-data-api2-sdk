<?php
declare(strict_types=1);

// WeatherDataApi2 SDK utility: result_body

class WeatherDataApi2ResultBody
{
    public static function call(WeatherDataApi2Context $ctx): ?WeatherDataApi2Result
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
