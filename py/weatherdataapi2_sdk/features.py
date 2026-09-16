# WeatherDataApi2 SDK feature factory

from weatherdataapi2_sdk.feature.base_feature import WeatherDataApi2BaseFeature
from weatherdataapi2_sdk.feature.ratelimit_feature import WeatherDataApi2RatelimitFeature
from weatherdataapi2_sdk.feature.retry_feature import WeatherDataApi2RetryFeature
from weatherdataapi2_sdk.feature.test_feature import WeatherDataApi2TestFeature
from weatherdataapi2_sdk.feature.timeout_feature import WeatherDataApi2TimeoutFeature


_FEATURES = {
    "base": lambda: WeatherDataApi2BaseFeature(),
    "ratelimit": lambda: WeatherDataApi2RatelimitFeature(),
    "retry": lambda: WeatherDataApi2RetryFeature(),
    "test": lambda: WeatherDataApi2TestFeature(),
    "timeout": lambda: WeatherDataApi2TimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
