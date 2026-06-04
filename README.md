# WeatherDataApi2 SDK

Fetch current conditions and forecasts from OpenWeatherMap's classic /data/2.5 weather endpoints

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Weather Data API

[OpenWeatherMap](https://openweathermap.org/) is a weather data service from OpenWeather Ltd. that aggregates observations from global and local weather models, satellites, radars, and a wide network of weather stations. This SDK targets the long-standing `https://api.openweathermap.org/data/2.5` endpoints, which expose current weather, forecasts, and related lookups in JSON.

What you get from the API:

- Current conditions for any location by coordinates, including temperature, `feels_like`, pressure, humidity, wind speed and direction, cloud cover, visibility, and (when present) rain/snow volume.
- Weather condition codes with short descriptions (e.g. "clear sky", "light rain") and localised text via the `lang` parameter.
- System data such as country code, sunrise/sunset times, and the Unix timestamp of the measurement.

Operational notes:

- Every request requires an `appid` query parameter carrying your OpenWeather API key.
- Locations are specified by `lat`/`lon`; results can be returned in `standard` (Kelvin), `metric` (Celsius), or `imperial` (Fahrenheit) units via the `units` parameter.
- Response format defaults to JSON; XML and HTML are available via the `mode` parameter.

## Try it

**TypeScript**
```bash
npm install weather-data-api2
```

**Python**
```bash
pip install weather-data-api2-sdk
```

**PHP**
```bash
composer require voxgig/weather-data-api2-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/weather-data-api2-sdk/go
```

**Ruby**
```bash
gem install weather-data-api2-sdk
```

**Lua**
```bash
luarocks install weather-data-api2-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { WeatherDataApi2SDK } from 'weather-data-api2'

const client = new WeatherDataApi2SDK({})

// List all weathers
const weathers = await client.Weather().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o weather-data-api2-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "weather-data-api2": {
      "command": "/abs/path/to/weather-data-api2-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Weather** | Current weather observations for a geographic point, served from `/data/2.5/weather` and keyed by `lat`/`lon` plus your `appid`. | `/weather` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from weatherdataapi2_sdk import WeatherDataApi2SDK

client = WeatherDataApi2SDK({})

# List all weathers
weathers, err = client.Weather(None).list(None, None)
```

### PHP

```php
<?php
require_once 'weatherdataapi2_sdk.php';

$client = new WeatherDataApi2SDK([]);

// List all weathers
[$weathers, $err] = $client->Weather(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/weather-data-api2-sdk/go"

client := sdk.NewWeatherDataApi2SDK(map[string]any{})

// List all weathers
weathers, err := client.Weather(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "WeatherDataApi2_sdk"

client = WeatherDataApi2SDK.new({})

# List all weathers
weathers, err = client.Weather(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("weather-data-api2_sdk")

local client = sdk.new({})

-- List all weathers
local weathers, err = client:Weather(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = WeatherDataApi2SDK.test()
const result = await client.Weather().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = WeatherDataApi2SDK.test(None, None)
result, err = client.Weather(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = WeatherDataApi2SDK::test(null, null);
[$result, $err] = $client->Weather(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Weather(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = WeatherDataApi2SDK.test(nil, nil)
result, err = client.Weather(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Weather(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Weather Data API

- Upstream: [https://openweathermap.org/](https://openweathermap.org/)
- API docs: [https://openweathermap.org/api](https://openweathermap.org/api)

- Operated by [OpenWeather Ltd.](https://openweathermap.org/) under their commercial Terms of Service.
- A personal API key (`appid`) is required on every request; sign up at [home.openweathermap.org](https://home.openweathermap.org/users/sign_up).
- Tiered subscription plans gate call volume, history depth, and update frequency; a free tier is available.
- Attribution to OpenWeather is expected when redistributing data.

---

Generated from the Weather Data API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
