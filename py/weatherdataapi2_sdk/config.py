# WeatherDataApi2 SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "WeatherDataApi2",
            "slug": "weather-data-api2",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://api.openweathermap.org/data/2.5",
            "auth": {
                "prefix": "",
                "in": "query",
                "name": "appid",
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
            "title": "Description",
            "type": "`$STRING`",
            "short": "Weather condition within the group",
          },
          {
            "name": "icon",
            "title": "Icon",
            "type": "`$STRING`",
            "short": "Weather icon id",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "short": "Weather condition id",
          },
          {
            "name": "main",
            "title": "Main",
            "type": "`$STRING`",
            "short": "Group of weather parameters (Rain, Snow, Extreme etc.)",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                    "lit": "weather",
                  },
                ],
                "parts": [
                  "weather",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.weather`",
                },
                "args": {
                  "query": [
                    {
                      "name": "appid",
                      "orig": "appid",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                    },
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 2643743,
                    },
                    {
                      "name": "lang",
                      "orig": "lang",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "en",
                    },
                    {
                      "name": "lat",
                      "orig": "lat",
                      "type": "`$NUMBER`",
                      "kind": "query",
                      "example": 51.5074,
                    },
                    {
                      "name": "lon",
                      "orig": "lon",
                      "type": "`$NUMBER`",
                      "kind": "query",
                      "example": -0.1278,
                    },
                    {
                      "name": "mode",
                      "orig": "mode",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "json",
                    },
                    {
                      "name": "q",
                      "orig": "q",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "London,uk",
                    },
                    {
                      "name": "unit",
                      "orig": "unit",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "standard",
                    },
                    {
                      "name": "zip",
                      "orig": "zip",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "94040,us",
                    },
                  ],
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
                    "zip",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
