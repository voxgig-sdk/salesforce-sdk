
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { SalesforceSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await SalesforceSDK.test()
    equal(null !== testsdk, true)
  })

})
