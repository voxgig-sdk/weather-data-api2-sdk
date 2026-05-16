
import { Context } from './Context'


class WeatherDataApi2Error extends Error {

  isWeatherDataApi2Error = true

  sdk = 'WeatherDataApi2'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  WeatherDataApi2Error
}

