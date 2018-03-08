<template>
    <div class="register">
      <header1 title="注册"></header1>
      <div class="model">
        <span>手机号</span><input @blur="calculate" type="text" v-model="tel"  placeholder="输入手机号">
      </div>
      <div class="m_warning">
        <div :class="isshow">
        <img src="./prompt_fill.png" alt=""><span>您登录的账号已被注册, 请  <router-link to="/login"> 请登录 </router-link> 或 </span> <router-link to="/forgetPassword">
          找回密码
        </router-link>
        </div>
      </div>
      <div class="code">
        <input type="text" v-model="num_code" @blur="vCode" placeholder="输入6位短信验证码">
        <input v-if="!unbind" type="button" v-model="btntxt" value="发送验证码" @click= "sendCode">
        <input type="button" v-else v-model="btntxt">
      </div>
      <div class="c_waring">
        <div class="show" v-if="is_status">
        <img src="./prompt_fill.png" alt=""><span>验证码错误</span>
        </div>
      </div>
      <div class="password">
        <input :type="isclick ? 'text' : 'password'" placeholder="请设置6-20位账户密码" @blur="vPassword" v-model="password"><img :src="eyes" alt="" @click="isClearly">
      </div>
      <div class="sure">
        <input type="checkbox" v-model="option"><span>同意</span> <a href="">抠抠网用户祖册协议</a>
      </div>
      <div class="submit">
        <input type="button" @click="bRegister" value="提交">
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import {networkRequest} from 'api/requires'
import Header1 from 'base/header1/header1'

export default {
  data () {
    return {
      data: {},
      isclick: false,
      tel: '',
      status: 123,
      btntxt: '获取验证码',
      unbind: false,
      code_status: 123456,
      vcode: '',
      num_code: '',
      is_status: false,
      password: '',
      option: false
    }
  },
  computed: {
    eyes: function () {
      return this.isclick ? require('./eye-1.png') : require('./eye-2.png')
    },
    isshow: function () {
      return (this.status === 200) ? 'show' : 'hide'
    }
  },
  methods: {
    isClearly: function () {
      this.isclick = !this.isclick
    },
    calculate: function (val) {
      let reg = /^1[34578]\d{9}$/
      if (reg.test(this.tel)) {
        let self = this
        networkRequest('get', '/users/' + this.tel + '/exists', function (res) {
          console.log(1)
          self.status = res.status
        }, function (err) {
          self.status = err.response.status
          console.log(self.status)
        })
      } else {
        this.status = 200
      }
    },
    sendCode () {
      let reg = /^((13|14|15|17|18)[0-9]{1}\d{8})$/
      if (this.tel === '') {
        this.warnOne = true
      } else if (!reg.test(this.tel)) {
        this.warnOne = true
      } else if (this.status === 404) {
        this.unbind = false
        this.time = 10
        this.timer()
        let selfs = this
        networkRequest('post', '/sms', function (res) {
          console.log(res.data.data.mobile)
          selfs.vcode = res.data.data.mobile
        }, function (err) {
          console.log(err.response.status)
        }, {Accept: 'application/json', mobile: selfs.tel})
      } else {
        this.unbind = true
      }
    },
    timer () {
      if (this.time > 0) {
        this.time--
        this.btntxt = this.time + 's后重新获取'
        setTimeout(this.timer, 1000)
        this.unbind = true
      } else {
        this.time = 0
        this.btntxt = '获取验证码'
        this.unbind = false
      }
    },
    vCode () {
      this.num_code !== '888888' ? this.is_status = true : this.is_status = false
    },
    vPassword () {
      if (this.password.length < 6) {
        console.log('密码必须大于6位')
      }
    },
    bRegister () {
      console.log(1)
      let reg = /^((13|14|15|17|18)[0-9]{1}\d{8})$/
      if (reg.test(this.tel) && this.num_code === '888888' && this.password.length >= 6 && this.option) {
        let self = this
        networkRequest('post', '/users', function (res) {
          console.log(res.status)
          self.$router.push('/login')
        }, function (err) {
          console.log(err.response.status)
        }, {mobile: this.tel, password: this.password, code: '888888'})
      }
    }
  },
  components: {
    Header1
  }
}
</script>

<style lang="less">
.register{
  background-color: #EDEDED;
  overflow: hidden;
  .show{
    display: block;
  }
  .hide{
    display: none;
  }
  .model{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #ffffff;
    border-bottom: 1px solid #BDBDBD;
    border-top:1px solid #BDBDBD;
    span{
      display: inline-block;
      margin-left: 5%;
      font-size: 18px;
    }
    input{
      float: right;
      height: 40px;
      line-height: 40px;
      width: 75%;
      font-size: 15px;
    }
  }
  .m_warning,.c_waring{
    height: 30px;
    line-height: 30px;
    color: #CD3700;
    font-size: 14px;
    a{
      text-decoration: underline;
      font-size: 16px;
    }
    img{
      width: 20px;
      height: 20px;
      margin-left: 5%;
      margin-right: 5px;
      position: relative;
      top: 4px;
    }
  }
  .code,.password{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #ffffff;
    border-bottom: 1px solid #BDBDBD;
    border-top:1px solid #BDBDBD;
    input{
      float: left;
      height: 40px;
      line-height: 40px;
      font-size: 15px;
    }
    input:first-child{
      width: 55%;
      margin-left: 5%;
    }
    input:last-child{
      width: 40%;
      border-left: 1px solid #BDBDBD;
      background-color: #ffffff;
      color: #CD3700;
    }
  }
  .password{
    input{
      border-right: 1px solid #BDBDBD;
    }
    img{
      display: block;
      width: 40px;
      height: 40px;
      position: relative;
      left: 15%;
      background-color: #ffffff;
      color: #CD3700;
    }
  }
  .sure{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    padding-left: 5%;
    input{
      margin-right: 10px;
      position: relative;
      top:2px;
    }
    a{
      color: #CD3700;
     text-decoration: underline;
      margin-left: 20px;
    }
  }
  .submit{
    margin-top: 20px;
    input{
      width: 96%;
      background-color: #6495ED;
      height: 50px;
      margin-left: 2%;
      color: #ffffff;
      font-size: 18px;
    }
  }
}
</style>
