# ProjectName SDK exists test

import pytest
from weatherdataapi2_sdk import WeatherDataApi2SDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = WeatherDataApi2SDK.test(None, None)
        assert testsdk is not None
