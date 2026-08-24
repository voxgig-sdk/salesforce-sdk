-- Typed models for the Salesforce SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Account
---@field AnnualRevenue? number
---@field CreatedDate? string
---@field Industry? string
---@field LastModifiedDate? string
---@field Name? string
---@field Phone? string
---@field Website? string
---@field id? string

---@class AccountLoadMatch
---@field id string

---@class AccountListMatch
---@field AnnualRevenue? number
---@field CreatedDate? string
---@field Industry? string
---@field LastModifiedDate? string
---@field Name? string
---@field Phone? string
---@field Website? string
---@field id? string

---@class AccountCreateData
---@field AnnualRevenue? number
---@field CreatedDate? string
---@field Industry? string
---@field LastModifiedDate? string
---@field Name? string
---@field Phone? string
---@field Website? string
---@field id? string

---@class AccountUpdateData
---@field id string
---@field AnnualRevenue? number
---@field CreatedDate? string
---@field Industry? string
---@field LastModifiedDate? string
---@field Name? string
---@field Phone? string
---@field Website? string

---@class AccountRemoveMatch
---@field id string

local M = {}

return M
