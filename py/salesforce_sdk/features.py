# Salesforce SDK feature factory

from salesforce_sdk.feature.base_feature import SalesforceBaseFeature
from salesforce_sdk.feature.debug_feature import SalesforceDebugFeature
from salesforce_sdk.feature.idempotency_feature import SalesforceIdempotencyFeature
from salesforce_sdk.feature.metrics_feature import SalesforceMetricsFeature
from salesforce_sdk.feature.paging_feature import SalesforcePagingFeature
from salesforce_sdk.feature.ratelimit_feature import SalesforceRatelimitFeature
from salesforce_sdk.feature.retry_feature import SalesforceRetryFeature
from salesforce_sdk.feature.test_feature import SalesforceTestFeature
from salesforce_sdk.feature.timeout_feature import SalesforceTimeoutFeature


_FEATURES = {
    "base": lambda: SalesforceBaseFeature(),
    "debug": lambda: SalesforceDebugFeature(),
    "idempotency": lambda: SalesforceIdempotencyFeature(),
    "metrics": lambda: SalesforceMetricsFeature(),
    "paging": lambda: SalesforcePagingFeature(),
    "ratelimit": lambda: SalesforceRatelimitFeature(),
    "retry": lambda: SalesforceRetryFeature(),
    "test": lambda: SalesforceTestFeature(),
    "timeout": lambda: SalesforceTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
