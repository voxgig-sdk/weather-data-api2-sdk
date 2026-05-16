# WeatherDataApi2 SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

WeatherDataApi2Utility.registrar = ->(u) {
  u.clean = WeatherDataApi2Utilities::Clean
  u.done = WeatherDataApi2Utilities::Done
  u.make_error = WeatherDataApi2Utilities::MakeError
  u.feature_add = WeatherDataApi2Utilities::FeatureAdd
  u.feature_hook = WeatherDataApi2Utilities::FeatureHook
  u.feature_init = WeatherDataApi2Utilities::FeatureInit
  u.fetcher = WeatherDataApi2Utilities::Fetcher
  u.make_fetch_def = WeatherDataApi2Utilities::MakeFetchDef
  u.make_context = WeatherDataApi2Utilities::MakeContext
  u.make_options = WeatherDataApi2Utilities::MakeOptions
  u.make_request = WeatherDataApi2Utilities::MakeRequest
  u.make_response = WeatherDataApi2Utilities::MakeResponse
  u.make_result = WeatherDataApi2Utilities::MakeResult
  u.make_point = WeatherDataApi2Utilities::MakePoint
  u.make_spec = WeatherDataApi2Utilities::MakeSpec
  u.make_url = WeatherDataApi2Utilities::MakeUrl
  u.param = WeatherDataApi2Utilities::Param
  u.prepare_auth = WeatherDataApi2Utilities::PrepareAuth
  u.prepare_body = WeatherDataApi2Utilities::PrepareBody
  u.prepare_headers = WeatherDataApi2Utilities::PrepareHeaders
  u.prepare_method = WeatherDataApi2Utilities::PrepareMethod
  u.prepare_params = WeatherDataApi2Utilities::PrepareParams
  u.prepare_path = WeatherDataApi2Utilities::PreparePath
  u.prepare_query = WeatherDataApi2Utilities::PrepareQuery
  u.result_basic = WeatherDataApi2Utilities::ResultBasic
  u.result_body = WeatherDataApi2Utilities::ResultBody
  u.result_headers = WeatherDataApi2Utilities::ResultHeaders
  u.transform_request = WeatherDataApi2Utilities::TransformRequest
  u.transform_response = WeatherDataApi2Utilities::TransformResponse
}
