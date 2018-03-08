<template>
    <div class="forgetPassward">
      <header1 title="找回密码"></header1>
      <div class="phone">
        <span class="name">手机号</span>
        <input class="num" v-on:blur="testIpone" type="tel" name="phone" v-model="phone"/>
      </div>
      <div v-show="warnOne" class="warnOne">
        <span class="mark">!</span>
        <span class="text">当手机号未注册，请点击去</span>
        <router-link to="/register" class="register">注册</router-link>
      </div>
      <div class="verification">
        <input class="num" type="text" placeholder="输入验证码" v-model="yzm"  v-on:blur="testYzm"/>
        <button type="button" v-if="disabled" class="send" @click="sendCode">{{btntxt}}</button>
        <button type="button" v-else class="send">{{btntxt}}</button>
      </div>
      <div v-show="warnTwo" class="warnTwo">
        <span class="mark">!</span>
        <span class="text">验证码错误</span>
      </div>
      <div class="passWord">
        <input class="text" name="password" v-model="password" v-on:blur="testPw" :type="see?'text':'password'" placeholder="请重置6-20位账户密码"/>
        <img class="eye" @click="changeEye" :src="eye_src"/>
      </div>
      <div v-show="warnThree" class="warnThree">
        <span class="mark">!</span>
        <span class="text">{{pwWarn}}</span>
      </div>
      <button class="finished" @click="complete">完成</button>
    </div>
</template>

<script type="text/ecmascript-6">
import {networkRequest} from '../../api/requires'
import Header1 from '../../base/header1/header1'
export default {
  data () {
    return {
      see: false,
      warnOne: false,
      warnTwo: false,
      warnThree: false,
      btntxt: '发送验证码',
      pwWarn: '密码应是6-20位',
      phone: this.phone,
      password: this.password,
      yzm: this.yzm,
      disabled: false,
      time: 0
    }
  },
  computed: {
    eye_src () {
      return this.see ? require('../../common/image/eye-2.png') : require('../../common/image/eye-1.png')
    }
  },
  methods: {
    changeEye () {
      this.see = !this.see
    },
    testIpone () {
      let reg = /^((13|14|15|17|18)[0-9]{1}\d{8})$/
      if (this.phone === '') {
        this.warnOne = true
      } else if (!reg.test(this.phone)) {
        this.warnOne = true
      } else {
        this.warnOne = false
        this.time = 15
        let self = this
        networkRequest('get', '/users/' + self.phone + '/exists', function (res) {
          console.log(res.status)
          if (res.status === 200) {
            self.disabled = true
          }
        }, function (err) {
          if (err.response.status === 404 || err.response.status === 422) {
            self.warnOne = true
            self.disabled = false
          }
        })
      }
    },
    sendCode () {
      let reg = /^((13|14|15|17|18)[0-9]{1}\d{8})$/
      if (this.phone === '') {
        this.warnOne = true
      } else if (!reg.test(this.phone)) {
        this.warnOne = true
      } else {
        this.time = 60
        this.timer()
        let self = this
        networkRequest('post', '/sms', function (res) {
          console.log(res)
        }, function (err) {
          console.log(err)
        }, {mobile: self.phone})
      }
    },
    timer () {
      if (this.time > 0) {
        this.time--
        this.btntxt = this.time + 's'
        setTimeout(this.timer, 1000)
        this.disabled = false
      } else {
        this.time = 60
        this.btntxt = '发送验证码'
        this.disabled = true
      }
    },
    testYzm () {
      let self = this
      networkRequest('get', '/sms/' + self.phone, function (res) {
        console.log(parseInt(res.data))
        if (parseInt(self.yzm) === 888888) {
          self.warnTwo = false
        } else {
          self.warnTwo = true
        }
      }, function (err) {
        console.log(err)
      })
    },
    testPw () {
      if (this.password.length < 6 || this.password.length > 20) {
        this.warnThree = true
      } else {
        this.warnThree = false
      }
    },
    complete () {
      let self = this
      networkRequest('put', '/users/reset_password', function (res) {
        console.log(res.status)
        self.$router.push('/login')
      }, function (err) {
        alert(err.response.status + '没有通过验证')
      }, {
        mobile: self.phone,
        password: self.password,
        code: '888888'
      })
    }
  },
  components: {
    Header1
  }
}
</script>

<style scoped lang="less">
.forgetPassward{
  width: 100%;
  height: 100%;
  .phone{
    margin-left: 20px;
    font-size: 14px;
    .name{
      height: 30px;
      line-height:50px;
    }
    .num{
      margin-left: 10px;
      padding-left: 10px;
      height: 30px;
      width: 200px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  }
  .mark{
    display: inline-block;
    vertical-align: top;
    margin-top: -2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    text-align: center;
    line-height:15px;
    font-size: 12px;
    background: red;
    color: #fff;
  }
  .warnOne{
    margin: 10px 0 0 20px;
    .text{
      display: inline-block;
      vertical-align: top;
      margin-left: 5px;
      font-size: 12px;
      color: red;
    }
    .register{
      display: inline-block;
      vertical-align: top;
      margin-top: -2px;
      margin-left: 5px;
      font-size: 14px;
      color: blue;
    }
  }
  .verification{
    margin: 20px 0 0 20px;
    font-size: 14px;
    .num{
      display: inline-block;
      vertical-align: top;
      height: 30px;
      width: 100px;
      padding-left: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .send{
      display: inline-block;
      vertical-align: top;
      margin-left: 50px;
      height:30px;
      width: 100px;
      border: none;
      border-radius: 4px;
      color: #fff;
      background: lightseagreen;
    }
  }
  .warnTwo{
    margin: 10px 0 0 20px;
    .text{
      display: inline-block;
      vertical-align: top;
      margin-left: 5px;
      font-size: 12px;
      color: red;
    }
  }
  .passWord{
    display: flex;
    margin: 20px 0 0 20px;
    padding-right: 5px;
    width: 80%;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    .text{
      flex: 1;
      height: 30px;
      padding-left: 10px;
    }
    .eye{
      flex: 0 25px;
      height: 20px;
      margin-top: 7px;
    }
  }
  .warnThree{
    margin: 10px 0 0 20px;
    .text{
      display: inline-block;
      vertical-align: top;
      margin-left: 5px;
      font-size: 12px;
      color: red;
    }
  }
  .finished{
    display: block;
    margin: 30px auto;
    width: 90%;
    padding: 10px 0;
    border: none;
    border-radius: 4px;
    text-align: center;
    background: cornflowerblue;
    color: #fff;
  }
}
</style>
