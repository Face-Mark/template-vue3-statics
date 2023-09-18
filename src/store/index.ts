import { createStore } from 'vuex'
import { config } from 'vuex-module-decorators'

import UserModule from '@/store/modules/user'

config.rawError = true

const store = createStore({
  state: {

  },
  modules: {
    UserModule
  }
})

export default store
