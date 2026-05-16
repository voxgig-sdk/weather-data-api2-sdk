package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "WeatherDataApi2",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://api.openweathermap.org/data/2.5",
			"auth": map[string]any{
				"prefix": "Bearer",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"weather": map[string]any{},
			},
		},
		"entity": map[string]any{
			"weather": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "icon",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "id",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "main",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
				},
				"name": "weather",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "appid",
											"orig": "appid",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": 2643743,
											"kind": "query",
											"name": "id",
											"orig": "id",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"example": "en",
											"kind": "query",
											"name": "lang",
											"orig": "lang",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": 51.5074,
											"kind": "query",
											"name": "lat",
											"orig": "lat",
											"reqd": false,
											"type": "`$NUMBER`",
											"active": true,
										},
										map[string]any{
											"example": -0.1278,
											"kind": "query",
											"name": "lon",
											"orig": "lon",
											"reqd": false,
											"type": "`$NUMBER`",
											"active": true,
										},
										map[string]any{
											"example": "json",
											"kind": "query",
											"name": "mode",
											"orig": "mode",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "London,uk",
											"kind": "query",
											"name": "q",
											"orig": "q",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "standard",
											"kind": "query",
											"name": "unit",
											"orig": "unit",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "94040,us",
											"kind": "query",
											"name": "zip",
											"orig": "zip",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/weather",
								"parts": []any{
									"weather",
								},
								"select": map[string]any{
									"exist": []any{
										"appid",
										"id",
										"lang",
										"lat",
										"lon",
										"mode",
										"q",
										"unit",
										"zip",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
