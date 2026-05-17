<?php
declare(strict_types=1);

// WeatherDataApi2 SDK context

require_once __DIR__ . '/Control.php';
require_once __DIR__ . '/Operation.php';
require_once __DIR__ . '/Spec.php';
require_once __DIR__ . '/Result.php';
require_once __DIR__ . '/Response.php';
require_once __DIR__ . '/Error.php';
require_once __DIR__ . '/Helpers.php';

class WeatherDataApi2Context
{
    public string $id;
    public array $out;
    public mixed $client;
    public ?WeatherDataApi2Utility $utility;
    public WeatherDataApi2Control $ctrl;
    public array $meta;
    public ?array $config;
    public ?array $entopts;
    public ?array $options;
    public mixed $entity;
    public ?array $shared;
    public array $opmap;
    public array $data;
    public array $reqdata;
    public array $match;
    public array $reqmatch;
    public ?array $point;
    public ?WeatherDataApi2Spec $spec;
    public ?WeatherDataApi2Result $result;
    public ?WeatherDataApi2Response $response;
    public WeatherDataApi2Operation $op;

    public function __construct(array $ctxmap = [], ?self $basectx = null)
    {
        $this->id = 'C' . random_int(10000000, 99999999);
        $this->out = [];

        $this->client = WeatherDataApi2Helpers::get_ctx_prop($ctxmap, 'client') ?? ($basectx ? $basectx->client : null);
        $this->utility = WeatherDataApi2Helpers::get_ctx_prop($ctxmap, 'utility') ?? ($basectx ? $basectx->utility : null);

        $this->ctrl = new WeatherDataApi2Control();
        $ctrl_raw = WeatherDataApi2Helpers::get_ctx_prop($ctxmap, 'ctrl');
        if (is_array($ctrl_raw)) {
            if (array_key_exists('throw', $ctrl_raw)) {
                $this->ctrl->throw_err = $ctrl_raw['throw'];
            }
            if (isset($ctrl_raw['explain']) && is_array($ctrl_raw['explain'])) {
                $this->ctrl->explain = $ctrl_raw['explain'];
            }
        } elseif ($basectx !== null && $basectx->ctrl !== null) {
            $this->ctrl = $basectx->ctrl;
        }

        $m = WeatherDataApi2Helpers::get_ctx_prop($ctxmap, 'meta');
        $this->meta = is_array($m) ? $m : ($basectx ? $basectx->meta ?? [] : []);

        $cfg = WeatherDataApi2Helpers::get_ctx_prop($ctxmap, 'config');
        $this->config = is_array($cfg) ? $cfg : ($basectx ? $basectx->config : null);

        $eo = WeatherDataApi2Helpers::get_ctx_prop($ctxmap, 'entopts');
        $this->entopts = is_array($eo) ? $eo : ($basectx ? $basectx->entopts : null);

        $o = WeatherDataApi2Helpers::get_ctx_prop($ctxmap, 'options');
        $this->options = is_array($o) ? $o : ($basectx ? $basectx->options : null);

        $e = WeatherDataApi2Helpers::get_ctx_prop($ctxmap, 'entity');
        $this->entity = $e ?? ($basectx ? $basectx->entity : null);

        $s = WeatherDataApi2Helpers::get_ctx_prop($ctxmap, 'shared');
        $this->shared = is_array($s) ? $s : ($basectx ? $basectx->shared : null);

        $om = WeatherDataApi2Helpers::get_ctx_prop($ctxmap, 'opmap');
        $this->opmap = is_array($om) ? $om : ($basectx ? $basectx->opmap ?? [] : []);

        $this->data = WeatherDataApi2Helpers::to_map(WeatherDataApi2Helpers::get_ctx_prop($ctxmap, 'data')) ?? [];
        $this->reqdata = WeatherDataApi2Helpers::to_map(WeatherDataApi2Helpers::get_ctx_prop($ctxmap, 'reqdata')) ?? [];
        $this->match = WeatherDataApi2Helpers::to_map(WeatherDataApi2Helpers::get_ctx_prop($ctxmap, 'match')) ?? [];
        $this->reqmatch = WeatherDataApi2Helpers::to_map(WeatherDataApi2Helpers::get_ctx_prop($ctxmap, 'reqmatch')) ?? [];

        $pt = WeatherDataApi2Helpers::get_ctx_prop($ctxmap, 'point');
        $this->point = is_array($pt) ? $pt : ($basectx ? $basectx->point : null);

        $sp = WeatherDataApi2Helpers::get_ctx_prop($ctxmap, 'spec');
        $this->spec = ($sp instanceof WeatherDataApi2Spec) ? $sp : ($basectx ? $basectx->spec : null);

        $r = WeatherDataApi2Helpers::get_ctx_prop($ctxmap, 'result');
        $this->result = ($r instanceof WeatherDataApi2Result) ? $r : ($basectx ? $basectx->result : null);

        $rp = WeatherDataApi2Helpers::get_ctx_prop($ctxmap, 'response');
        $this->response = ($rp instanceof WeatherDataApi2Response) ? $rp : ($basectx ? $basectx->response : null);

        $opname = WeatherDataApi2Helpers::get_ctx_prop($ctxmap, 'opname') ?? '';
        $this->op = $this->resolve_op($opname);
    }

    public function resolve_op(string $opname): WeatherDataApi2Operation
    {
        // Cache key is `<entity>:<opname>` so two entities with the same op
        // (e.g. both have a "list") get distinct cached Operations. Keying
        // on opname alone caused the first-resolved entity's points to be
        // served to every subsequent entity's call.
        $entname = (is_object($this->entity) && method_exists($this->entity, 'get_name'))
            ? $this->entity->get_name()
            : '_';
        $cacheKey = $entname . ':' . $opname;

        if (isset($this->opmap[$cacheKey])) {
            return $this->opmap[$cacheKey];
        }
        if ($opname === '') {
            return new WeatherDataApi2Operation([]);
        }

        $opcfg = \Voxgig\Struct\Struct::getpath($this->config, "entity.{$entname}.op.{$opname}");

        $input = ($opname === 'update' || $opname === 'create') ? 'data' : 'match';

        $points = [];
        if (is_array($opcfg)) {
            $t = \Voxgig\Struct\Struct::getprop($opcfg, 'points');
            if (is_array($t)) {
                $points = $t;
            }
        }

        $op = new WeatherDataApi2Operation([
            'entity' => $entname,
            'name' => $opname,
            'input' => $input,
            'points' => $points,
        ]);
        $this->opmap[$cacheKey] = $op;
        return $op;
    }

    public function make_error(string $code, string $msg): WeatherDataApi2Error
    {
        return new WeatherDataApi2Error($code, $msg, $this);
    }
}
