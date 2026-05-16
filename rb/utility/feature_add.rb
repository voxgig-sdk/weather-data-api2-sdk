# WeatherDataApi2 SDK utility: feature_add
module WeatherDataApi2Utilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
