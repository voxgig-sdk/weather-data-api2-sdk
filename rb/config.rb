# WeatherDataApi2 SDK configuration

module WeatherDataApi2Config
  def self.make_config
    {
      "main" => {
        "name" => "WeatherDataApi2",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
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
              "active" => true,
              "name" => "description",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "icon",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "id",
              "req" => false,
              "type" => "`$INTEGER`",
              "index$" => 2,
            },
            {
              "active" => true,
              "name" => "main",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 3,
            },
          ],
          "name" => "weather",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "query" => [
                      {
                        "active" => true,
                        "kind" => "query",
                        "name" => "appid",
                        "orig" => "appid",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => 2643743,
                        "kind" => "query",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                      },
                      {
                        "active" => true,
                        "example" => "en",
                        "kind" => "query",
                        "name" => "lang",
                        "orig" => "lang",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => 51.5074,
                        "kind" => "query",
                        "name" => "lat",
                        "orig" => "lat",
                        "reqd" => false,
                        "type" => "`$NUMBER`",
                      },
                      {
                        "active" => true,
                        "example" => -0.1278,
                        "kind" => "query",
                        "name" => "lon",
                        "orig" => "lon",
                        "reqd" => false,
                        "type" => "`$NUMBER`",
                      },
                      {
                        "active" => true,
                        "example" => "json",
                        "kind" => "query",
                        "name" => "mode",
                        "orig" => "mode",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => "London,uk",
                        "kind" => "query",
                        "name" => "q",
                        "orig" => "q",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => "standard",
                        "kind" => "query",
                        "name" => "unit",
                        "orig" => "unit",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => "94040,us",
                        "kind" => "query",
                        "name" => "zip",
                        "orig" => "zip",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/weather",
                  "parts" => [
                    "weather",
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
                  "index$" => 0,
                },
              ],
              "key$" => "list",
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
