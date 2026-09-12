export interface Weather {
    description?: string;
    icon?: string;
    id?: number;
    main?: string;
}
export interface WeatherListMatch {
    appid: string;
    id?: number;
    lang?: string;
    lat?: number;
    lon?: number;
    mode?: string;
    q?: string;
    unit?: string;
    zip?: string;
}
