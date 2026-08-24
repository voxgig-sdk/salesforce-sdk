package core

type SalesforceError struct {
	IsSalesforceError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewSalesforceError(code string, msg string, ctx *Context) *SalesforceError {
	return &SalesforceError{
		IsSalesforceError: true,
		Sdk:              "Salesforce",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *SalesforceError) Error() string {
	return e.Msg
}
