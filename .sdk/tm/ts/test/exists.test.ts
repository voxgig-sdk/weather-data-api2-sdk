
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { WeatherDataApi2SDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = WeatherDataApi2SDK.test()
    equal(testsdk instanceof WeatherDataApi2SDK, true,
      'WeatherDataApi2SDK.test() must return a client synchronously')
  })

})
