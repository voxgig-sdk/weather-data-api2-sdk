// Typed models for the WeatherDataApi2 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Weather {
  description?: string
  icon?: string
  id?: number
  main?: string
}

export type WeatherListMatch = Partial<Weather>

