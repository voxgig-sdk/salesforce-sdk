-- Salesforce SDK error

local SalesforceError = {}
SalesforceError.__index = SalesforceError


function SalesforceError.new(code, msg, ctx)
  local self = setmetatable({}, SalesforceError)
  self.is_sdk_error = true
  self.sdk = "Salesforce"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function SalesforceError:error()
  return self.msg
end


function SalesforceError:__tostring()
  return self.msg
end


return SalesforceError
