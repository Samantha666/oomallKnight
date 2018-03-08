import * as types from './mutation-types'

export const saveToken = function ({commit}, token) {
  commit(types.SET_TOKEN, token)
}
