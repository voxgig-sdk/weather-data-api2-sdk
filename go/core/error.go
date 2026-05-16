package core

type WeatherDataApi2Error struct {
	IsWeatherDataApi2Error bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewWeatherDataApi2Error(code string, msg string, ctx *Context) *WeatherDataApi2Error {
	return &WeatherDataApi2Error{
		IsWeatherDataApi2Error: true,
		Sdk:              "WeatherDataApi2",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *WeatherDataApi2Error) Error() string {
	return e.Msg
}
