"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherDataApi2Error = void 0;
class WeatherDataApi2Error extends Error {
    isWeatherDataApi2Error = true;
    sdk = 'WeatherDataApi2';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.WeatherDataApi2Error = WeatherDataApi2Error;
//# sourceMappingURL=WeatherDataApi2Error.js.map