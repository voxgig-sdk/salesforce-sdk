# Salesforce SDK utility: make_context

from projectname_sdk.core.context import SalesforceContext


def make_context_util(ctxmap, basectx):
    return SalesforceContext(ctxmap, basectx)
