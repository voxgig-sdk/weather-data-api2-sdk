<?php
declare(strict_types=1);

// Typed models for the WeatherDataApi2 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Weather entity data model. */
class Weather
{
    public ?string $description = null;
    public ?string $icon = null;
    public ?int $id = null;
    public ?string $main = null;
}

/** Request payload for Weather#list. */
class WeatherListMatch
{
    public ?string $description = null;
    public ?string $icon = null;
    public ?int $id = null;
    public ?string $main = null;
}

