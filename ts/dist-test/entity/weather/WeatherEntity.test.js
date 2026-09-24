"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('WeatherEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when WEATHER_DATA_API2_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('WEATHER_DATA_API2_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.WeatherDataApi2SDK.test();
        const ent = testsdk.Weather();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.WEATHER_DATA_API2_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'weather.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "Weather condition within the group", "t": "`$STRING`", "key$": "description", "index$": 0 }, "icon": { "a": true, "h": "Icon", "n": "icon", "r": false, "sh": "Weather icon id", "t": "`$STRING`", "key$": "icon", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Weather condition id", "t": "`$INTEGER`", "key$": "id", "index$": 2 }, "main": { "a": true, "h": "Main", "n": "main", "r": false, "sh": "Group of weather parameters (Rain, Snow, Extreme etc.)", "t": "`$STRING`", "key$": "main", "index$": 3 } }, "id": { "field": "id", "name": "id" }, "name": "weather", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /weather", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "appid", "or": "appid", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 2643743, "k": "query", "n": "id", "or": "id", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "ex": "en", "k": "query", "n": "lang", "or": "lang", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": 51.5074, "k": "query", "n": "lat", "or": "lat", "r": false, "t": "`$NUMBER`", "index$": 3 }, { "a": true, "ex": -0.1278, "k": "query", "n": "lon", "or": "lon", "r": false, "t": "`$NUMBER`", "index$": 4 }, { "a": true, "ex": "json", "k": "query", "n": "mode", "or": "mode", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "ex": "London,uk", "k": "query", "n": "q", "or": "q", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "ex": "standard", "k": "query", "n": "unit", "or": "unit", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "ex": "94040,us", "k": "query", "n": "zip", "or": "zip", "r": false, "t": "`$STRING`", "index$": 8 }] }, "k": "http", "m": "GET", "o": "/weather", "q": { "exist": ["appid", "id", "lang", "lat", "lon", "mode", "q", "unit", "zip"] }, "r": {}, "s": [{ "lit": "weather" }], "t": { "req": "`reqdata`", "res": "`body.weather`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "weather", "name__orig": "weather", "Name": "Weather", "name_": "weather", "name-": "weather", "NAME": "WEATHER", "index$": 0 }, { "active": true, "entity": "weather", "key$": "BasicWeatherFlow", "kind": "basic", "name": "BasicWeatherFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "weather_ref01" } }], "index$": 0 }] }, 'Weather', { "GET /weather": { "protocol": "http", "operationId": "getCurrentWeather", "responses": { "200": { "description": "Successful response with current weather data", "content": { "application/json": { "schema": { "type": "object", "properties": { "coord": { "key$": "coord", "properties": { "lat": { "description": "Latitude of the location", "format": "float", "type": "number" }, "lon": { "description": "Longitude of the location", "format": "float", "type": "number" } }, "type": "object" }, "weather": { "items": { "properties": { "description": { "description": "Weather condition within the group", "type": "string", "key$": "description" }, "icon": { "description": "Weather icon id", "type": "string", "key$": "icon" }, "id": { "description": "Weather condition id", "type": "integer", "key$": "id" }, "main": { "description": "Group of weather parameters (Rain, Snow, Extreme etc.)", "type": "string", "key$": "main" } }, "type": "object", "index$": 0 }, "key$": "weather", "type": "array" }, "base": { "description": "Internal parameter", "key$": "base", "type": "string" }, "main": { "key$": "main", "properties": { "feels_like": { "description": "Temperature accounting for human perception", "format": "float", "type": "number" }, "grnd_level": { "description": "Atmospheric pressure on the ground level, hPa", "type": "integer" }, "humidity": { "description": "Humidity percentage", "type": "integer" }, "pressure": { "description": "Atmospheric pressure on the sea level, hPa", "type": "integer" }, "sea_level": { "description": "Atmospheric pressure on the sea level, hPa", "type": "integer" }, "temp": { "description": "Temperature", "format": "float", "type": "number" }, "temp_max": { "description": "Maximum temperature at the moment", "format": "float", "type": "number" }, "temp_min": { "description": "Minimum temperature at the moment", "format": "float", "type": "number" } }, "type": "object" }, "visibility": { "description": "Visibility in meters, maximum 10km", "key$": "visibility", "type": "integer" }, "wind": { "key$": "wind", "properties": { "deg": { "description": "Wind direction in degrees", "type": "integer" }, "gust": { "description": "Wind gust", "format": "float", "type": "number" }, "speed": { "description": "Wind speed", "format": "float", "type": "number" } }, "type": "object" }, "clouds": { "key$": "clouds", "properties": { "all": { "description": "Cloudiness percentage", "type": "integer" } }, "type": "object" }, "rain": { "key$": "rain", "properties": { "1h": { "description": "Rain volume for the last 1 hour, mm", "format": "float", "type": "number" }, "3h": { "description": "Rain volume for the last 3 hours, mm", "format": "float", "type": "number" } }, "type": "object" }, "snow": { "key$": "snow", "properties": { "1h": { "description": "Snow volume for the last 1 hour, mm", "format": "float", "type": "number" }, "3h": { "description": "Snow volume for the last 3 hours, mm", "format": "float", "type": "number" } }, "type": "object" }, "dt": { "description": "Time of data calculation, unix UTC", "key$": "dt", "type": "integer" }, "sys": { "key$": "sys", "properties": { "country": { "description": "Country code (ISO 3166)", "type": "string" }, "id": { "description": "Internal parameter", "type": "integer" }, "sunrise": { "description": "Sunrise time, unix UTC", "type": "integer" }, "sunset": { "description": "Sunset time, unix UTC", "type": "integer" }, "type": { "description": "Internal parameter", "type": "integer" } }, "type": "object" }, "timezone": { "description": "Shift in seconds from UTC", "key$": "timezone", "type": "integer" }, "id": { "description": "City ID", "key$": "id", "type": "integer" }, "name": { "description": "City name", "key$": "name", "type": "string" }, "cod": { "description": "Internal parameter", "key$": "cod", "type": "integer" } }, "x-ref": "#/components/schemas/WeatherResponse" } } } }, "400": { "description": "Bad request - Invalid parameters" }, "401": { "description": "Unauthorized - Invalid API key" }, "404": { "description": "Not found - City not found" }, "429": { "description": "Too many requests - Rate limit exceeded" }, "500": { "description": "Internal server error" } }, "parameters": [{ "name": "q", "in": "query", "description": "City name, state code (US only), and country code divided by comma. Use ISO 3166 country codes.", "required": false, "schema": { "type": "string" }, "example": "London,uk", "index$": 0 }, { "name": "id", "in": "query", "description": "City ID. List of city IDs can be downloaded from OpenWeatherMap.", "required": false, "schema": { "type": "integer" }, "example": 2643743, "index$": 1 }, { "name": "lat", "in": "query", "description": "Latitude of the location", "required": false, "schema": { "type": "number", "format": "float", "minimum": -90, "maximum": 90 }, "example": 51.5074, "index$": 2 }, { "name": "lon", "in": "query", "description": "Longitude of the location", "required": false, "schema": { "type": "number", "format": "float", "minimum": -180, "maximum": 180 }, "example": -0.1278, "index$": 3 }, { "name": "zip", "in": "query", "description": "Zip code and country code divided by comma", "required": false, "schema": { "type": "string" }, "example": "94040,us", "index$": 4 }, { "name": "units", "in": "query", "description": "Units of measurement. standard (Kelvin), metric (Celsius), or imperial (Fahrenheit)", "required": false, "schema": { "type": "string", "enum": ["standard", "metric", "imperial"], "default": "standard" }, "index$": 5 }, { "name": "lang", "in": "query", "description": "Language code for the output. See API documentation for available languages.", "required": false, "schema": { "type": "string", "default": "en" }, "index$": 6 }, { "name": "mode", "in": "query", "description": "Response format. json or xml", "required": false, "schema": { "type": "string", "enum": ["json", "xml"], "default": "json" }, "index$": 7 }, { "name": "appid", "in": "query", "description": "API key for authentication", "required": true, "schema": { "type": "string" }, "index$": 8 }], "security": [{ "ApiKeyAuth": [] }], "securitySource": "operation", "securitySchemes": { "ApiKeyAuth": { "type": "apiKey", "in": "query", "name": "appid", "description": "API key required for authentication. Obtain from OpenWeatherMap." } } } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let weather_ref01_data = Object.values(setup.data.existing.weather)[0];
        // LIST
        const weather_ref01_ent = client.Weather();
        const weather_ref01_match = {};
        const weather_ref01_list = (await weather_ref01_ent.list(weather_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/weather/WeatherTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.WeatherDataApi2SDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['weather01', 'weather02', 'weather03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'WEATHER_DATA_API2_TEST_WEATHER_ENTID': idmap,
        'WEATHER_DATA_API2_TEST_LIVE': 'FALSE',
        'WEATHER_DATA_API2_TEST_EXPLAIN': 'FALSE',
        'WEATHER_DATA_API2_APIKEY': '',
    });
    idmap = env['WEATHER_DATA_API2_TEST_WEATHER_ENTID'];
    const live = 'TRUE' === env.WEATHER_DATA_API2_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['WEATHER_DATA_API2_TEST_WEATHER_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.WeatherDataApi2SDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.WEATHER_DATA_API2_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.WEATHER_DATA_API2_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=WeatherEntity.test.js.map