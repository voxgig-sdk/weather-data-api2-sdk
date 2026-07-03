package voxgigweatherdataapi2sdk

import (
	"github.com/voxgig-sdk/weather-data-api2-sdk/go/core"
	"github.com/voxgig-sdk/weather-data-api2-sdk/go/entity"
	"github.com/voxgig-sdk/weather-data-api2-sdk/go/feature"
	_ "github.com/voxgig-sdk/weather-data-api2-sdk/go/utility"
)

// Type aliases preserve external API.
type WeatherDataApi2SDK = core.WeatherDataApi2SDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type WeatherDataApi2Entity = core.WeatherDataApi2Entity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type WeatherDataApi2Error = core.WeatherDataApi2Error

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewWeatherEntityFunc = func(client *core.WeatherDataApi2SDK, entopts map[string]any) core.WeatherDataApi2Entity {
		return entity.NewWeatherEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewWeatherDataApi2SDK = core.NewWeatherDataApi2SDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewWeatherDataApi2SDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *WeatherDataApi2SDK  { return NewWeatherDataApi2SDK(nil) }
func Test() *WeatherDataApi2SDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
