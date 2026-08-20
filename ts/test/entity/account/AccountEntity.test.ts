
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { SalesforceSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


describe('AccountEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SALESFORCE_TEST_LIVE=TRUE.
  afterEach(liveDelay('SALESFORCE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SalesforceSDK.test()
    const ent = testsdk.Account()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SALESFORCE_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (maybeSkipControl(t, 'entityOp', 'account.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set SALESFORCE_TEST_ACCOUNT_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const account_ref01_ent = client.Account()
    let account_ref01_data = setup.data.new.account['account_ref01']

    account_ref01_data = (await account_ref01_ent.create(account_ref01_data)).data()
    assert(null != account_ref01_data.id)


    // LIST
    const account_ref01_match: any = {}

    const account_ref01_list = (await account_ref01_ent.list(account_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(account_ref01_list, { id: account_ref01_data.id })))


    // UPDATE
    const account_ref01_data_up0: any = {}
    account_ref01_data_up0.id = account_ref01_data.id

    const account_ref01_markdef_up0 = { name: 'CreatedDate', value: 'Mark01-account_ref01_' + setup.now }
    ;(account_ref01_data_up0 as any)[account_ref01_markdef_up0.name] = account_ref01_markdef_up0.value

    const account_ref01_resdata_up0 = (await account_ref01_ent.update(account_ref01_data_up0)).data()
    assert(account_ref01_resdata_up0.id === account_ref01_data_up0.id)

    assert((account_ref01_resdata_up0 as any)[account_ref01_markdef_up0.name] === account_ref01_markdef_up0.value)


    // LOAD
    const account_ref01_match_dt0: any = {}
    account_ref01_match_dt0.id = account_ref01_data.id
    const account_ref01_data_dt0 = (await account_ref01_ent.load(account_ref01_match_dt0)).data()
    assert(account_ref01_data_dt0.id === account_ref01_data.id)


    // REMOVE
    const account_ref01_match_rm0: any = { id: account_ref01_data.id }
    await account_ref01_ent.remove(account_ref01_match_rm0)
  

    // LIST
    const account_ref01_match_rt0: any = {}

    const account_ref01_list_rt0 = (await account_ref01_ent.list(account_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(account_ref01_list_rt0, { id: account_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/account/AccountTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = SalesforceSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['account01','account02','account03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['SALESFORCE_TEST_ACCOUNT_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'SALESFORCE_TEST_ACCOUNT_ENTID': idmap,
    'SALESFORCE_TEST_LIVE': 'FALSE',
    'SALESFORCE_TEST_EXPLAIN': 'FALSE',
    'SALESFORCE_APIKEY': 'NONE',
  })

  idmap = env['SALESFORCE_TEST_ACCOUNT_ENTID']

  const live = 'TRUE' === env.SALESFORCE_TEST_LIVE

  if (live) {
    client = new SalesforceSDK(merge([
      {
        apikey: env.SALESFORCE_APIKEY,
      },
      extra
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.SALESFORCE_TEST_EXPLAIN,
    live,
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
