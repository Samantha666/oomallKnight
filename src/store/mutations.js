import * as types from './mutation-types'

const mutations = {
  [types.SET_TOKEN] (state, token) {
    state.token = token
  },
  [types.SET_USERINFO] (state, userInfo) {
    state.userInfo = userInfo
  }
}

export default mutations
