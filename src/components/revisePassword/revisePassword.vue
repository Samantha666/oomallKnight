<template>
    <div class="revisePassword">
      <header1 title="修改密码"></header1>
      <div class="content">
        <div class="name">当前密码</div>
        <input type="password" v-model="oldPw" placeholder="输入当然账号密码"/>
      </div>
      <div class="content">
        <div class="name">新密码</div>
        <input type="password" v-model="newPw" v-on:blur="testNew" placeholder="输入6-20位的新密码"/>
      </div>
      <div class="content">
        <div class="name">输入密码</div>
        <input type="password" v-model="confirmPw" v-on:blur="testConfirm" placeholder="再次输入新密码"/>
      </div>
      <button type="button" class="commit" @click="commit">提交</button>
    </div>
</template>

<script type="text/ecmascript-6">
import Header1 from '../../base/header1/header1'
import {networkRequest} from '../../api/requires'
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      oldPw: this.oldPw,
      newPw: this.newPw,
      confirmPw: this.confirmPw
    }
  },
  computed: {
    ...mapGetters([
      'token'
    ])
  },
  methods: {
    testNew () {
      if (this.newPw.length < 6 || this.newPw.length > 20) {
        alert('密码必须在6-20位之间')
      }
    },
    testConfirm () {
      if (this.newPw !== this.confirmPw) {
        alert('密码不一致')
      }
    },
    commit () {
      let self = this
      console.log(self.token)
      networkRequest('put', '/users/change_password', function (res) {
        console.log(res.status)
        if (res.status === 204) {
          self.$router.push('/moreSet')
        } else {
          alert('旧密码不符')
        }
      }, function (err) {
        alert(err.response.status + '没有通过验证')
        return false
      }, {
        oldpassword: self.oldPw,
        password: self.newPw,
        password_confirmation: self.confirmPw
      }, {
        authorization: 'bearer' + self.token
      })
    }
  },
  components: {
    Header1
  }
}
</script>

<style scoped lang="less">
.revisePassword{
  width: 100%;
  .content{
    margin: 15px auto;
    width: 80%;
    font-size: 14px;
    input{
      display: block;
      width: 100%;
      height: 30px;
      margin-top: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  }
  .commit{
    display: block;
    margin: 30px auto;
    width: 80%;
    padding: 10px 0;
    border: none;
    border-radius: 4px;
    text-align: center;
    background: cornflowerblue;
    color: #fff;
  }
}

</style>
