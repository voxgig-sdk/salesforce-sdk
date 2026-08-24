<?php
declare(strict_types=1);

// Salesforce SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class SalesforceMakeContext
{
    public static function call(array $ctxmap, ?SalesforceContext $basectx): SalesforceContext
    {
        return new SalesforceContext($ctxmap, $basectx);
    }
}
