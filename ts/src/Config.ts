
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
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
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://api.openweathermap.org/data/2.5",

    auth: {
      prefix: '',
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
          "short": "Weather condition within the group",
          "type": "`$STRING`"
        },
        {
          "name": "icon",
          "short": "Weather icon id",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Weather condition id",
          "type": "`$INTEGER`"
        },
        {
          "name": "main",
          "short": "Group of weather parameters (Rain, Snow, Extreme etc.)",
          "type": "`$STRING`"
        }
      ],
      "name": "weather",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "appid",
                    "orig": "appid",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "example": 2643743,
                    "kind": "query",
                    "name": "id",
                    "orig": "id",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "en",
                    "kind": "query",
                    "name": "lang",
                    "orig": "lang",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 51.5074,
                    "kind": "query",
                    "name": "lat",
                    "orig": "lat",
                    "type": "`$NUMBER`"
                  },
                  {
                    "example": -0.1278,
                    "kind": "query",
                    "name": "lon",
                    "orig": "lon",
                    "type": "`$NUMBER`"
                  },
                  {
                    "example": "json",
                    "kind": "query",
                    "name": "mode",
                    "orig": "mode",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "London,uk",
                    "kind": "query",
                    "name": "q",
                    "orig": "q",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "standard",
                    "kind": "query",
                    "name": "unit",
                    "orig": "unit",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "94040,us",
                    "kind": "query",
                    "name": "zip",
                    "orig": "zip",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/weather",
              "parts": [
                "weather"
              ],
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
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.weather`"
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
  config
}

