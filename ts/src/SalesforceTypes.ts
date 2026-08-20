// Typed models for the Salesforce SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Account {
  AnnualRevenue?: number
  CreatedDate?: string
  Industry?: string
  LastModifiedDate?: string
  Name?: string
  Phone?: string
  Website?: string
  id?: string
}

export interface AccountLoadMatch {
  id: string
}

export interface AccountListMatch {
  AnnualRevenue?: number
  CreatedDate?: string
  Industry?: string
  LastModifiedDate?: string
  Name?: string
  Phone?: string
  Website?: string
  id?: string
}

export interface AccountCreateData {
  AnnualRevenue?: number
  CreatedDate?: string
  Industry?: string
  LastModifiedDate?: string
  Name?: string
  Phone?: string
  Website?: string
  id?: string
}

export interface AccountUpdateData {
  id: string
  AnnualRevenue?: number
  CreatedDate?: string
  Industry?: string
  LastModifiedDate?: string
  Name?: string
  Phone?: string
  Website?: string
}

export interface AccountRemoveMatch {
  id: string
}

