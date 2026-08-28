# frozen_string_literal: true

# Typed models for the WeatherDataApi2 SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Weather entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] main
#   @return [String, nil]
Weather = Struct.new(
  :description,
  :icon,
  :id,
  :main,
  keyword_init: true
)

# Request payload for Weather#list.
#
# @!attribute [rw] appid
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] lang
#   @return [String, nil]
#
# @!attribute [rw] lat
#   @return [Float, nil]
#
# @!attribute [rw] lon
#   @return [Float, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] q
#   @return [String, nil]
#
# @!attribute [rw] unit
#   @return [String, nil]
#
# @!attribute [rw] zip
#   @return [String, nil]
WeatherListMatch = Struct.new(
  :appid,
  :id,
  :lang,
  :lat,
  :lon,
  :mode,
  :q,
  :unit,
  :zip,
  keyword_init: true
)

