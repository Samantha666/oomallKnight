import axios from 'axios'
export function networkRequest (mode, url, callback, callback1, obj, header) {
  obj = obj || {}
  header = header || {}
  let baseurl = 'http://delivery.oomall.test/v1'
  axios({
    method: mode,
    url: baseurl + url,
    data: obj,
    headers: header
  }).then((res) => {
    callback(res)
  }).catch((err) => {
    callback1(err)
  })
}
