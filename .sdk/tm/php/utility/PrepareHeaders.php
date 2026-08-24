<?php
declare(strict_types=1);

// Salesforce SDK utility: prepare_headers

class SalesforcePrepareHeaders
{
    public static function call(SalesforceContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
