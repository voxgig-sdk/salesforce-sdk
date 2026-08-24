<?php
declare(strict_types=1);

// Typed models for the Salesforce SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Account entity data model. */
class Account
{
    public ?float $AnnualRevenue = null;
    public ?string $CreatedDate = null;
    public ?string $Industry = null;
    public ?string $LastModifiedDate = null;
    public ?string $Name = null;
    public ?string $Phone = null;
    public ?string $Website = null;
    public ?string $id = null;
}

/** Request payload for Account#load. */
class AccountLoadMatch
{
    public string $id;
}

/** Request payload for Account#list. */
class AccountListMatch
{
    public ?float $AnnualRevenue = null;
    public ?string $CreatedDate = null;
    public ?string $Industry = null;
    public ?string $LastModifiedDate = null;
    public ?string $Name = null;
    public ?string $Phone = null;
    public ?string $Website = null;
    public ?string $id = null;
}

/** Request payload for Account#create. */
class AccountCreateData
{
    public ?float $AnnualRevenue = null;
    public ?string $CreatedDate = null;
    public ?string $Industry = null;
    public ?string $LastModifiedDate = null;
    public ?string $Name = null;
    public ?string $Phone = null;
    public ?string $Website = null;
    public ?string $id = null;
}

/** Request payload for Account#update. */
class AccountUpdateData
{
    public string $id;
    public ?float $AnnualRevenue = null;
    public ?string $CreatedDate = null;
    public ?string $Industry = null;
    public ?string $LastModifiedDate = null;
    public ?string $Name = null;
    public ?string $Phone = null;
    public ?string $Website = null;
}

/** Request payload for Account#remove. */
class AccountRemoveMatch
{
    public string $id;
}

