import axios from 'axios'
import { url } from './config'

export function getUserInfo (token) {
  return axios({
    method: 'get',
    url: url + '/v1/users/me',
    headers: {
      authorization: 'bearer ' + token
    }
  }).then((res) => {
    console.log(res)
    return Promise.resolve(res)
  }).catch((err) => {
    console.log(err.response)
    return Promise.resolve(err.response)
  })
}
