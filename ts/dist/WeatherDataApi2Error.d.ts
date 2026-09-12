import { Context } from './Context';
declare class WeatherDataApi2Error extends Error {
    isWeatherDataApi2Error: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { WeatherDataApi2Error };
