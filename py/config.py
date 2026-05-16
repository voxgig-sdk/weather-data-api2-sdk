# WeatherDataApi2 SDK configuration


def make_config():
    return {
        "main": {
            "name": "WeatherDataApi2",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://api.openweathermap.org/data/2.5",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "weather": {},
            },
        },
        "entity": {
      "weather": {
        "fields": [
          {
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "icon",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "id",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "main",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
        ],
        "name": "weather",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "appid",
                      "orig": "appid",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": 2643743,
                      "kind": "query",
                      "name": "id",
                      "orig": "id",
                      "reqd": False,
                      "type": "`$INTEGER`",
                      "active": True,
                    },
                    {
                      "example": "en",
                      "kind": "query",
                      "name": "lang",
                      "orig": "lang",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": 51.5074,
                      "kind": "query",
                      "name": "lat",
                      "orig": "lat",
                      "reqd": False,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                    {
                      "example": -0.1278,
                      "kind": "query",
                      "name": "lon",
                      "orig": "lon",
                      "reqd": False,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                    {
                      "example": "json",
                      "kind": "query",
                      "name": "mode",
                      "orig": "mode",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "London,uk",
                      "kind": "query",
                      "name": "q",
                      "orig": "q",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "standard",
                      "kind": "query",
                      "name": "unit",
                      "orig": "unit",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "94040,us",
                      "kind": "query",
                      "name": "zip",
                      "orig": "zip",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/weather",
                "parts": [
                  "weather",
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
                    "zip",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
