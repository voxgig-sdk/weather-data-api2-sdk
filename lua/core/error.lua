-- WeatherDataApi2 SDK error

local WeatherDataApi2Error = {}
WeatherDataApi2Error.__index = WeatherDataApi2Error


function WeatherDataApi2Error.new(code, msg, ctx)
  local self = setmetatable({}, WeatherDataApi2Error)
  self.is_sdk_error = true
  self.sdk = "WeatherDataApi2"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function WeatherDataApi2Error:error()
  return self.msg
end


function WeatherDataApi2Error:__tostring()
  return self.msg
end


return WeatherDataApi2Error
