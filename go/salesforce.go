package voxgigsalesforcesdk

import (
	"github.com/voxgig-sdk/salesforce-sdk/go/core"
	"github.com/voxgig-sdk/salesforce-sdk/go/entity"
	"github.com/voxgig-sdk/salesforce-sdk/go/feature"
	_ "github.com/voxgig-sdk/salesforce-sdk/go/utility"
)

// Type aliases preserve external API.
type SalesforceSDK = core.SalesforceSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type SalesforceEntity = core.SalesforceEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type SalesforceError = core.SalesforceError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAccountEntityFunc = func(client *core.SalesforceSDK, entopts map[string]any) core.SalesforceEntity {
		return entity.NewAccountEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewSalesforceSDK = core.NewSalesforceSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewSalesforceSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *SalesforceSDK  { return NewSalesforceSDK(nil) }
func Test() *SalesforceSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
