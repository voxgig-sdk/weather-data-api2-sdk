
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'WeatherDataApi2',
        slug: "weather-data-api2",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://api.openweathermap.org/data/2.5",

    auth: {
      prefix: '',
      in: 'query',
      name: 'appid',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        weather: {
        },
  
    }
  }


  entity = {
    "weather": {
      "fields": [
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`",
          "short": "Weather condition within the group"
        },
        {
          "name": "icon",
          "title": "Icon",
          "type": "`$STRING`",
          "short": "Weather icon id"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$INTEGER`",
          "short": "Weather condition id"
        },
        {
          "name": "main",
          "title": "Main",
          "type": "`$STRING`",
          "short": "Group of weather parameters (Rain, Snow, Extreme etc.)"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "weather",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/weather",
              "segments": [
                {
                  "lit": "weather"
                }
              ],
              "parts": [
                "weather"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.weather`"
              },
              "args": {
                "query": [
                  {
                    "name": "appid",
                    "orig": "appid",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true
                  },
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 2643743
                  },
                  {
                    "name": "lang",
                    "orig": "lang",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "en"
                  },
                  {
                    "name": "lat",
                    "orig": "lat",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": 51.5074
                  },
                  {
                    "name": "lon",
                    "orig": "lon",
                    "type": "`$NUMBER`",
                    "kind": "query",
                    "example": -0.1278
                  },
                  {
                    "name": "mode",
                    "orig": "mode",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "json"
                  },
                  {
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "London,uk"
                  },
                  {
                    "name": "unit",
                    "orig": "unit",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "standard"
                  },
                  {
                    "name": "zip",
                    "orig": "zip",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "94040,us"
                  }
                ]
              },
              "select": {
                "exist": [
                  "appid",
                  "id",
                  "lang",
                  "lat",
                  "lon",
                  "mode",
                  "q",
                  "unit",
                  "zip"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

