<template>
  <div class="testdata">
    token: {{token}}
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
import {mapMutations} from 'vuex'

export default {
  data () {
    return {
      data: {},
      token: ''
    }
  },
  created () {
    axios.post('http://delivery.oomall.test/v1/token/login', {
      mobile: '13173458861',
      password: '123456'
    }).then((res) => {
      console.log(res)
      let token = res.data.data.token
      this.token = token
    }).catch((err) => {
      console.log(err)
      console.log(err.response.data)
      console.log(err.response.status)
      console.log(err.response.headers)
      alert(err.response.data.errors.credentials)
    })
  },
  methods: {
    ...mapMutations({
      setToken: 'SET_TOKEN'
    })
  }
}
</script>

<style lang="less">

</style>
