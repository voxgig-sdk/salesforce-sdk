<?php
declare(strict_types=1);

// Salesforce SDK utility: result_body

class SalesforceResultBody
{
    public static function call(SalesforceContext $ctx): ?SalesforceResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
