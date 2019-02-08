import { ZObject, Bundle } from 'zapier-platform-core'

export default {
  key: 'a',
  noun: 'a',
  display: { label: 'Create A', description: 'Creates A' },
  operation: {
    perform: async (z: ZObject, bundle: Bundle) => ({
      id: 1,
      name: 'a',
      age: 123
    })
  }
}
