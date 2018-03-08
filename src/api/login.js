import axios from 'axios'
import { url } from './config'

export function loginText (phone, pass) {
  return axios.post(url + '/v1/token/login', {
    mobile: phone,
    password: pass
  }).then((res) => {
    return Promise.resolve(res)
  }).catch((err) => {
    if (err.response.status === 404) {
      alert(err.response.data.errors.credentials)
    }
  })
}
