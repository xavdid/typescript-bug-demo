import { ZObject, Bundle } from 'zapier-platform-core'

export default {
  key: 'b',
  noun: 'b',
  display: { label: 'Create B', description: 'Creates B' },
  operation: {
    perform: async (z: ZObject, bundle: Bundle) => ({
      id: 1,
      name: 'b',
      address: '123 main st'
    })
  }
}
