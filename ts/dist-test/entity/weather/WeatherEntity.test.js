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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "description", "req": false, "short": "Weather condition within the group", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "icon", "req": false, "short": "Weather icon id", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "id", "req": false, "short": "Weather condition id", "type": "`$INTEGER`", "index$": 2 }, { "active": true, "name": "main", "req": false, "short": "Group of weather parameters (Rain, Snow, Extreme etc.)", "type": "`$STRING`", "index$": 3 }], "id": { "field": "id", "name": "id" }, "name": "weather", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "appid", "orig": "appid", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": 2643743, "kind": "query", "name": "id", "orig": "id", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "example": "en", "kind": "query", "name": "lang", "orig": "lang", "reqd": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "example": 51.5074, "kind": "query", "name": "lat", "orig": "lat", "reqd": false, "type": "`$NUMBER`", "index$": 3 }, { "active": true, "example": -0.1278, "kind": "query", "name": "lon", "orig": "lon", "reqd": false, "type": "`$NUMBER`", "index$": 4 }, { "active": true, "example": "json", "kind": "query", "name": "mode", "orig": "mode", "reqd": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "example": "London,uk", "kind": "query", "name": "q", "orig": "q", "reqd": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "example": "standard", "kind": "query", "name": "unit", "orig": "unit", "reqd": false, "type": "`$STRING`", "index$": 7 }, { "active": true, "example": "94040,us", "kind": "query", "name": "zip", "orig": "zip", "reqd": false, "type": "`$STRING`", "index$": 8 }] }, "contract": { "id": "GET /weather", "json": "{\"operationId\":\"getCurrentWeather\",\"parameters\":[{\"description\":\"City name, state code (US only), and country code divided by comma. Use ISO 3166 country codes.\",\"example\":\"London,uk\",\"in\":\"query\",\"name\":\"q\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"City ID. List of city IDs can be downloaded from OpenWeatherMap.\",\"example\":2643743,\"in\":\"query\",\"name\":\"id\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"description\":\"Latitude of the location\",\"example\":51.5074,\"in\":\"query\",\"name\":\"lat\",\"required\":false,\"schema\":{\"format\":\"float\",\"maximum\":90,\"minimum\":-90,\"type\":\"number\"}},{\"description\":\"Longitude of the location\",\"example\":-0.1278,\"in\":\"query\",\"name\":\"lon\",\"required\":false,\"schema\":{\"format\":\"float\",\"maximum\":180,\"minimum\":-180,\"type\":\"number\"}},{\"description\":\"Zip code and country code divided by comma\",\"example\":\"94040,us\",\"in\":\"query\",\"name\":\"zip\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Units of measurement. standard (Kelvin), metric (Celsius), or imperial (Fahrenheit)\",\"in\":\"query\",\"name\":\"units\",\"required\":false,\"schema\":{\"default\":\"standard\",\"enum\":[\"standard\",\"metric\",\"imperial\"],\"type\":\"string\"}},{\"description\":\"Language code for the output. See API documentation for available languages.\",\"in\":\"query\",\"name\":\"lang\",\"required\":false,\"schema\":{\"default\":\"en\",\"type\":\"string\"}},{\"description\":\"Response format. json or xml\",\"in\":\"query\",\"name\":\"mode\",\"required\":false,\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"xml\"],\"type\":\"string\"}},{\"description\":\"API key for authentication\",\"in\":\"query\",\"name\":\"appid\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"base\":{\"description\":\"Internal parameter\",\"type\":\"string\"},\"clouds\":{\"properties\":{\"all\":{\"description\":\"Cloudiness percentage\",\"type\":\"integer\"}},\"type\":\"object\"},\"cod\":{\"description\":\"Internal parameter\",\"type\":\"integer\"},\"coord\":{\"properties\":{\"lat\":{\"description\":\"Latitude of the location\",\"format\":\"float\",\"type\":\"number\"},\"lon\":{\"description\":\"Longitude of the location\",\"format\":\"float\",\"type\":\"number\"}},\"type\":\"object\"},\"dt\":{\"description\":\"Time of data calculation, unix UTC\",\"type\":\"integer\"},\"id\":{\"description\":\"City ID\",\"type\":\"integer\"},\"main\":{\"properties\":{\"feels_like\":{\"description\":\"Temperature accounting for human perception\",\"format\":\"float\",\"type\":\"number\"},\"grnd_level\":{\"description\":\"Atmospheric pressure on the ground level, hPa\",\"type\":\"integer\"},\"humidity\":{\"description\":\"Humidity percentage\",\"type\":\"integer\"},\"pressure\":{\"description\":\"Atmospheric pressure on the sea level, hPa\",\"type\":\"integer\"},\"sea_level\":{\"description\":\"Atmospheric pressure on the sea level, hPa\",\"type\":\"integer\"},\"temp\":{\"description\":\"Temperature\",\"format\":\"float\",\"type\":\"number\"},\"temp_max\":{\"description\":\"Maximum temperature at the moment\",\"format\":\"float\",\"type\":\"number\"},\"temp_min\":{\"description\":\"Minimum temperature at the moment\",\"format\":\"float\",\"type\":\"number\"}},\"type\":\"object\"},\"name\":{\"description\":\"City name\",\"type\":\"string\"},\"rain\":{\"properties\":{\"1h\":{\"description\":\"Rain volume for the last 1 hour, mm\",\"format\":\"float\",\"type\":\"number\"},\"3h\":{\"description\":\"Rain volume for the last 3 hours, mm\",\"format\":\"float\",\"type\":\"number\"}},\"type\":\"object\"},\"snow\":{\"properties\":{\"1h\":{\"description\":\"Snow volume for the last 1 hour, mm\",\"format\":\"float\",\"type\":\"number\"},\"3h\":{\"description\":\"Snow volume for the last 3 hours, mm\",\"format\":\"float\",\"type\":\"number\"}},\"type\":\"object\"},\"sys\":{\"properties\":{\"country\":{\"description\":\"Country code (ISO 3166)\",\"type\":\"string\"},\"id\":{\"description\":\"Internal parameter\",\"type\":\"integer\"},\"sunrise\":{\"description\":\"Sunrise time, unix UTC\",\"type\":\"integer\"},\"sunset\":{\"description\":\"Sunset time, unix UTC\",\"type\":\"integer\"},\"type\":{\"description\":\"Internal parameter\",\"type\":\"integer\"}},\"type\":\"object\"},\"timezone\":{\"description\":\"Shift in seconds from UTC\",\"type\":\"integer\"},\"visibility\":{\"description\":\"Visibility in meters, maximum 10km\",\"type\":\"integer\"},\"weather\":{\"items\":{\"properties\":{\"description\":{\"description\":\"Weather condition within the group\",\"type\":\"string\"},\"icon\":{\"description\":\"Weather icon id\",\"type\":\"string\"},\"id\":{\"description\":\"Weather condition id\",\"type\":\"integer\"},\"main\":{\"description\":\"Group of weather parameters (Rain, Snow, Extreme etc.)\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"wind\":{\"properties\":{\"deg\":{\"description\":\"Wind direction in degrees\",\"type\":\"integer\"},\"gust\":{\"description\":\"Wind gust\",\"format\":\"float\",\"type\":\"number\"},\"speed\":{\"description\":\"Wind speed\",\"format\":\"float\",\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response with current weather data\"},\"400\":{\"description\":\"Bad request - Invalid parameters\"},\"401\":{\"description\":\"Unauthorized - Invalid API key\"},\"404\":{\"description\":\"Not found - City not found\"},\"429\":{\"description\":\"Too many requests - Rate limit exceeded\"},\"500\":{\"description\":\"Internal server error\"}},\"security\":[{\"ApiKeyAuth\":[]}],\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key required for authentication. Obtain from OpenWeatherMap.\",\"in\":\"query\",\"name\":\"appid\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/weather", "segments": [{ "lit": "weather" }], "select": { "exist": ["appid", "id", "lang", "lat", "lon", "mode", "q", "unit", "zip"] }, "transform": { "req": "`reqdata`", "res": "`body.weather`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "weather", "name__orig": "weather", "Name": "Weather", "name_": "weather", "name-": "weather", "NAME": "WEATHER", "index$": 0 }, { "active": true, "entity": "weather", "key$": "BasicWeatherFlow", "kind": "basic", "name": "BasicWeatherFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "weather_ref01" } }], "index$": 0 }] }, 'Weather');
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