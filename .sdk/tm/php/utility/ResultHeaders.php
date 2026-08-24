<?php
declare(strict_types=1);

// Salesforce SDK utility: result_headers

class SalesforceResultHeaders
{
    public static function call(SalesforceContext $ctx): ?SalesforceResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
