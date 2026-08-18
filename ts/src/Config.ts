
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


  main = {
    name: 'WeatherDataApi2',
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
          "type": "`$STRING`"
        },
        {
          "name": "icon",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$INTEGER`"
        },
        {
          "name": "main",
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

