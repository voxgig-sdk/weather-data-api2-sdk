# WeatherDataApi2 SDK configuration

module WeatherDataApi2Config
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "WeatherDataApi2",
        "slug" => "weather-data-api2",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://api.openweathermap.org/data/2.5",
        "auth" => {
          "prefix" => "",
          "in" => "query",
          "name" => "appid",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "weather" => {},
        },
      },
      "entity" => {
        "weather" => {
          "fields" => [
            {
              "name" => "description",
              "title" => "Description",
              "type" => "`$STRING`",
              "short" => "Weather condition within the group",
            },
            {
              "name" => "icon",
              "title" => "Icon",
              "type" => "`$STRING`",
              "short" => "Weather icon id",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$INTEGER`",
              "short" => "Weather condition id",
            },
            {
              "name" => "main",
              "title" => "Main",
              "type" => "`$STRING`",
              "short" => "Group of weather parameters (Rain, Snow, Extreme etc.)",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "weather",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/weather",
                  "segments" => [
                    {
                      "lit" => "weather",
                    },
                  ],
                  "parts" => [
                    "weather",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.weather`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "appid",
                        "orig" => "appid",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                      },
                      {
                        "name" => "id",
                        "orig" => "id",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 2643743,
                      },
                      {
                        "name" => "lang",
                        "orig" => "lang",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "en",
                      },
                      {
                        "name" => "lat",
                        "orig" => "lat",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                        "example" => 51.5074,
                      },
                      {
                        "name" => "lon",
                        "orig" => "lon",
                        "type" => "`$NUMBER`",
                        "kind" => "query",
                        "example" => -0.1278,
                      },
                      {
                        "name" => "mode",
                        "orig" => "mode",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "json",
                      },
                      {
                        "name" => "q",
                        "orig" => "q",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "London,uk",
                      },
                      {
                        "name" => "unit",
                        "orig" => "unit",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "standard",
                      },
                      {
                        "name" => "zip",
                        "orig" => "zip",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "94040,us",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
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
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    WeatherDataApi2Features.make_feature(name)
  end
end
