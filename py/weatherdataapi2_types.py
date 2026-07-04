# Typed models for the WeatherDataApi2 SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Weather:
    description: Optional[str] = None
    icon: Optional[str] = None
    id: Optional[int] = None
    main: Optional[str] = None


@dataclass
class WeatherListMatch:
    description: Optional[str] = None
    icon: Optional[str] = None
    id: Optional[int] = None
    main: Optional[str] = None

