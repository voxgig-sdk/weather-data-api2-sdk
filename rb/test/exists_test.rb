# WeatherDataApi2 SDK exists test

require "minitest/autorun"
require_relative "../WeatherDataApi2_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = WeatherDataApi2SDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
