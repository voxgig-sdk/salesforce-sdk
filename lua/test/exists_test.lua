-- Salesforce SDK exists test

local sdk = require("salesforce_sdk")

describe("SalesforceSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
