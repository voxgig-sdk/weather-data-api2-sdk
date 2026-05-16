<?php
declare(strict_types=1);

// WeatherDataApi2 SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

WeatherDataApi2Utility::setRegistrar(function (WeatherDataApi2Utility $u): void {
    $u->clean = [WeatherDataApi2Clean::class, 'call'];
    $u->done = [WeatherDataApi2Done::class, 'call'];
    $u->make_error = [WeatherDataApi2MakeError::class, 'call'];
    $u->feature_add = [WeatherDataApi2FeatureAdd::class, 'call'];
    $u->feature_hook = [WeatherDataApi2FeatureHook::class, 'call'];
    $u->feature_init = [WeatherDataApi2FeatureInit::class, 'call'];
    $u->fetcher = [WeatherDataApi2Fetcher::class, 'call'];
    $u->make_fetch_def = [WeatherDataApi2MakeFetchDef::class, 'call'];
    $u->make_context = [WeatherDataApi2MakeContext::class, 'call'];
    $u->make_options = [WeatherDataApi2MakeOptions::class, 'call'];
    $u->make_request = [WeatherDataApi2MakeRequest::class, 'call'];
    $u->make_response = [WeatherDataApi2MakeResponse::class, 'call'];
    $u->make_result = [WeatherDataApi2MakeResult::class, 'call'];
    $u->make_point = [WeatherDataApi2MakePoint::class, 'call'];
    $u->make_spec = [WeatherDataApi2MakeSpec::class, 'call'];
    $u->make_url = [WeatherDataApi2MakeUrl::class, 'call'];
    $u->param = [WeatherDataApi2Param::class, 'call'];
    $u->prepare_auth = [WeatherDataApi2PrepareAuth::class, 'call'];
    $u->prepare_body = [WeatherDataApi2PrepareBody::class, 'call'];
    $u->prepare_headers = [WeatherDataApi2PrepareHeaders::class, 'call'];
    $u->prepare_method = [WeatherDataApi2PrepareMethod::class, 'call'];
    $u->prepare_params = [WeatherDataApi2PrepareParams::class, 'call'];
    $u->prepare_path = [WeatherDataApi2PreparePath::class, 'call'];
    $u->prepare_query = [WeatherDataApi2PrepareQuery::class, 'call'];
    $u->result_basic = [WeatherDataApi2ResultBasic::class, 'call'];
    $u->result_body = [WeatherDataApi2ResultBody::class, 'call'];
    $u->result_headers = [WeatherDataApi2ResultHeaders::class, 'call'];
    $u->transform_request = [WeatherDataApi2TransformRequest::class, 'call'];
    $u->transform_response = [WeatherDataApi2TransformResponse::class, 'call'];
});
