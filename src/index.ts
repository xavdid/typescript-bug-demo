const { version } = require('../package.json')
import { version as platformVersion } from 'zapier-platform-core'

import A from './creates/a'
import B from './creates/b'

// error fixed w/
// App: { creates: { [x: string]: any }; [x: string]: any }
// ...sort of

const App = {
  version,
  platformVersion,

  triggers: {},

  searches: {},

  creates: {
    [A.key]: A,
    [B.key]: B
  }
}

export default App
