# WeatherDataApi2 SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module WeatherDataApi2Features
  def self.make_feature(name)
    case name
    when "base"
      WeatherDataApi2BaseFeature.new
    when "ratelimit"
      WeatherDataApi2RatelimitFeature.new
    when "retry"
      WeatherDataApi2RetryFeature.new
    when "test"
      WeatherDataApi2TestFeature.new
    when "timeout"
      WeatherDataApi2TimeoutFeature.new
    else
      WeatherDataApi2BaseFeature.new
    end
  end
end
