const should = require('should')

import { createAppTester } from 'zapier-platform-core'

import App from '../index'
const appTester = createAppTester(App)

describe('My Test', () => {
  it('should create a', async () => {
    const response = await appTester(App.creates.a.operation.perform, {})
    should(response.age).equal(123)
  })

  it('should create b', async () => {
    const response = await appTester(App.creates.b.operation.perform, {})
    should(response.address).equal('123 main st')
  })
})
