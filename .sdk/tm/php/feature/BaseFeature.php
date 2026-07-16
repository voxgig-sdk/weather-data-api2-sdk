<?php
declare(strict_types=1);

// WeatherDataApi2 SDK base feature

class WeatherDataApi2BaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(WeatherDataApi2Context $ctx, array $options): void {}
    public function PostConstruct(WeatherDataApi2Context $ctx): void {}
    public function PostConstructEntity(WeatherDataApi2Context $ctx): void {}
    public function SetData(WeatherDataApi2Context $ctx): void {}
    public function GetData(WeatherDataApi2Context $ctx): void {}
    public function GetMatch(WeatherDataApi2Context $ctx): void {}
    public function SetMatch(WeatherDataApi2Context $ctx): void {}
    public function PrePoint(WeatherDataApi2Context $ctx): void {}
    public function PreSpec(WeatherDataApi2Context $ctx): void {}
    public function PreRequest(WeatherDataApi2Context $ctx): void {}
    public function PreResponse(WeatherDataApi2Context $ctx): void {}
    public function PreResult(WeatherDataApi2Context $ctx): void {}
    public function PreDone(WeatherDataApi2Context $ctx): void {}
    public function PreUnexpected(WeatherDataApi2Context $ctx): void {}
}
