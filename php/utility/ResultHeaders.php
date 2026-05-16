<?php
declare(strict_types=1);

// WeatherDataApi2 SDK utility: result_headers

class WeatherDataApi2ResultHeaders
{
    public static function call(WeatherDataApi2Context $ctx): ?WeatherDataApi2Result
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
