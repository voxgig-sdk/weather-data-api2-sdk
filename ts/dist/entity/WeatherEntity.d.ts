import { WeatherDataApi2EntityBase } from '../WeatherDataApi2EntityBase';
import type { WeatherDataApi2SDK } from '../WeatherDataApi2SDK';
import type { Control } from '../types';
import type { Weather, WeatherListMatch } from '../WeatherDataApi2Types';
declare class WeatherEntity extends WeatherDataApi2EntityBase<Weather> {
    constructor(client: WeatherDataApi2SDK, entopts: any);
    make(this: WeatherEntity): WeatherEntity;
    list(this: any, reqmatch?: WeatherListMatch, ctrl?: Control): Promise<WeatherEntity[]>;
}
export { WeatherEntity };
