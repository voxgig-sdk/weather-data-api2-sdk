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
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
        },
      },
      "options" => {
        "base" => "https://api.openweathermap.org/data/2.5",
        "auth" => {
          "prefix" => "",
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
              "short" => "Weather condition within the group",
              "type" => "`$STRING`",
            },
            {
              "name" => "icon",
              "short" => "Weather icon id",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "short" => "Weather condition id",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "main",
              "short" => "Group of weather parameters (Rain, Snow, Extreme etc.)",
              "type" => "`$STRING`",
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
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "appid",
                        "orig" => "appid",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 2643743,
                        "kind" => "query",
                        "name" => "id",
                        "orig" => "id",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => "en",
                        "kind" => "query",
                        "name" => "lang",
                        "orig" => "lang",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 51.5074,
                        "kind" => "query",
                        "name" => "lat",
                        "orig" => "lat",
                        "type" => "`$NUMBER`",
                      },
                      {
                        "example" => -0.1278,
                        "kind" => "query",
                        "name" => "lon",
                        "orig" => "lon",
                        "type" => "`$NUMBER`",
                      },
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "mode",
                        "orig" => "mode",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "London,uk",
                        "kind" => "query",
                        "name" => "q",
                        "orig" => "q",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "standard",
                        "kind" => "query",
                        "name" => "unit",
                        "orig" => "unit",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "94040,us",
                        "kind" => "query",
                        "name" => "zip",
                        "orig" => "zip",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/weather",
                  "segments" => [
                    {
                      "lit" => "weather",
                    },
                  ],
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
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.weather`",
                  },
                  "parts" => [
                    "weather",
                  ],
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
