# WeatherDataApi2 SDK feature factory

from feature.base_feature import WeatherDataApi2BaseFeature
from feature.test_feature import WeatherDataApi2TestFeature


def _make_feature(name):
    features = {
        "base": lambda: WeatherDataApi2BaseFeature(),
        "test": lambda: WeatherDataApi2TestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
