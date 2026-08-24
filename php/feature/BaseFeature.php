<?php
declare(strict_types=1);

// Salesforce SDK base feature

class SalesforceBaseFeature
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

    public function init(SalesforceContext $ctx, array $options): void {}
    public function PostConstruct(SalesforceContext $ctx): void {}
    public function PostConstructEntity(SalesforceContext $ctx): void {}
    public function SetData(SalesforceContext $ctx): void {}
    public function GetData(SalesforceContext $ctx): void {}
    public function GetMatch(SalesforceContext $ctx): void {}
    public function SetMatch(SalesforceContext $ctx): void {}
    public function PrePoint(SalesforceContext $ctx): void {}
    public function PreSpec(SalesforceContext $ctx): void {}
    public function PreRequest(SalesforceContext $ctx): void {}
    public function PreResponse(SalesforceContext $ctx): void {}
    public function PreResult(SalesforceContext $ctx): void {}
    public function PreDone(SalesforceContext $ctx): void {}
    public function PreUnexpected(SalesforceContext $ctx): void {}
}
