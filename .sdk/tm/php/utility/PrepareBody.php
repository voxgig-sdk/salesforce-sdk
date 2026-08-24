<?php
declare(strict_types=1);

// Salesforce SDK utility: prepare_body

class SalesforcePrepareBody
{
    public static function call(SalesforceContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
