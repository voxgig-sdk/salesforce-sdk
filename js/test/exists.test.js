
const { test, describe } = require('node:test')
const { equal } = require('node:assert')


const { SalesforceSDK } = require('..')


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await SalesforceSDK.test()
    equal(null !== testsdk, true)
  })

})
