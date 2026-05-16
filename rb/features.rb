# WeatherDataApi2 SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module WeatherDataApi2Features
  def self.make_feature(name)
    case name
    when "base"
      WeatherDataApi2BaseFeature.new
    when "test"
      WeatherDataApi2TestFeature.new
    else
      WeatherDataApi2BaseFeature.new
    end
  end
end
