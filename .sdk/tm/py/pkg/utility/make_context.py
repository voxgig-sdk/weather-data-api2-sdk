# WeatherDataApi2 SDK utility: make_context

from projectname_sdk.core.context import WeatherDataApi2Context


def make_context_util(ctxmap, basectx):
    return WeatherDataApi2Context(ctxmap, basectx)
