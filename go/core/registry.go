package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewWeatherEntityFunc func(client *WeatherDataApi2SDK, entopts map[string]any) WeatherDataApi2Entity

