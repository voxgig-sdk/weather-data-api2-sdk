# WeatherDataApi2 SDK utility: make_context
require_relative '../core/context'
module WeatherDataApi2Utilities
  MakeContext = ->(ctxmap, basectx) {
    WeatherDataApi2Context.new(ctxmap, basectx)
  }
end
