<template>
  <div class="login">
    <h3 class="app-name">抠抠骑士</h3>
    <div class="close" @click="close">×</div>
    <div class="form">
      <div class="username">
        <span class="icon-text icon-user">♟ </span>
        <input ref="phone" type="text" placeholder="手机号" @focus="toggle_del" @blur="toggle_del" v-model="username">
        <span v-show="del_show" class="icon-text icon-close">×</span>
      </div>
      <div class="password">
        <img class="icon-img icon-lock" src="./lock.png">
        <input ref="password" :type="is_lock?'text': 'password'" placeholder="密码">
        <img class="icon-img icon-eye" @click="eye" :src="eye_src">
      </div>
      <button @click="submit" class="login-btn">登陆</button>
    </div>
    <div class="link">
      <router-link to="/forgetPassword">忘记密码</router-link>
      <router-link to="/register">新用户注册</router-link>
    </div>
    <div class="other">
      <h4 class="title">使用其他账户登录</h4>
      <div class="other-links">
        <img src="./qq.png" alt="" class="link">
        <img src="./weixin.png" alt="" class="link">
        <img src="./weibo.png" alt="" class="link">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapMutations} from 'vuex'
import {loginText} from '../../api/login.js'

export default {
  data () {
    return {
      username: '',
      del_show: false,
      is_lock: false
    }
  },
  computed: {
    eye_src () {
      return this.is_lock ? require('./eye-2.png') : require('./eye-1.png')
    }
  },
  methods: {
    close () {
      this.$router.back()
    },
    toggle_del () {
      this.del_show = !this.del_show
    },
    eye () {
      this.is_lock = !this.is_lock
    },
    submit () {
      let phone = this.username
      let pass = this.$refs.password.value
      if (phone.length === 0) {
        alert('请输入用户名')
        this.$refs.phone.focus()
        return
      }
      if (pass.length === 0) {
        alert('请输入密码')
        this.$refs.password.focus()
        return
      }
      this._getToken(phone, pass)
    },
    _getToken (phone, pass) {
      let token
      let self = this
      loginText(phone, pass).then((res) => {
        if (res.status === 404) {
          alert(res.errors.credentials)
          return false
        }
        if (res.status === 200) {
          token = res.data.data.token
          self.setToken(token)
          self.$router.push('/')
        }
      })
    },
    ...mapMutations({
      setToken: 'SET_TOKEN'
    })
  }
}
</script>

<style lang="less">
.login{
  padding: 0 10%;
  .app-name{
    margin-top: 80px;
    font-size: 18px;
    text-align: center;
  }
  .close{
    position: absolute;
    top:10px;
    right:10px;
    font-size: 28px;
  }
  .form{
    margin-top: 70px;
    .username,.password{
      display: flex;
      height: 34px;
      /*position: relative;*/
      border: 1px solid #888;
      .icon-text{
        flex: 0 24px;
        line-height: 36px;
        font-size: 26px;
      }
      .icon-img{
        flex: 0 24px;
        width: 26px;
        height:24px;
        padding-top: 4px;
      }
      .icon-close{
        flex: 0 26px;
        text-align: center;
      }
      .icon-eye{
        flex: 0 26px;
        text-align: center;
      }
      input{
        flex: 1;
      }
    }
    .username{
      border-bottom: none;
    }
    .login-btn{
      display: block;
      width: 100%;
      height: 34px;
      line-height: 34px;
      margin: 30px 0 15px;
      border-radius: 5px;
      text-align: center;
      background-color: blue;
      color: #fff;
      font-size: 14px;
    }
  }
  .link{
    display: flex;
    justify-content: space-between;
  }
  .other{
    width: 80%;
    position: absolute;
    bottom: 30px;
    left:10%;
    .title{
      text-align: center;margin-bottom: 30px;
    }
    .other-links{
      display: flex;
      justify-content: space-around;
    }
  }

}
</style>
