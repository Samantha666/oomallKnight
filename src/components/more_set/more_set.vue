<template>
    <div class="moreSet">
      <header1 title="更多设置"></header1>
      <ul class="list">
        <li>
          <router-link class="block" to="/">
            <div class="change_passwd">
              <div class="icon-img icon-edit"></div>
              <span class="text">修改密码</span>
              <div class="left">
                <i class="icon-img icon-right"></i>
              </div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link class="block" to="/bindAccount">
            <div class="bind_account">
              <div class="icon-img icon-phone"></div>
              <span class="text">账号绑定</span>
              <div class="left">
                <i class="icon-img icon-right"></i>
              </div>
            </div>
          </router-link>
        </li>
        <li>
          <div class="clear_cache">
            <div class="icon-img icon-edit"></div>
            <span class="text">清空缓存</span>
            <div class="left">
              <span class="text">1.25MB</span>
              <i class="icon-img icon-right"></i>
            </div>
          </div>
        </li>
        <li>
          <div class="check_update">
            <div class="icon-img icon-check"></div>
            <span class="text">检查更新</span>
            <div class="left">
              <span class="text">V1.0.0</span>
              <i class="icon-img icon-right"></i>
            </div>
          </div>
        </li>
        <li>
          <router-link class="block" to="/">
            <div class="about_us">
              <div class="icon-img icon-about"></div>
              <span class="text">关于我们</span>
              <div class="left">
                <i class="icon-img icon-right"></i>
              </div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link class="block" to="/">
            <div class="share">
              <div class="icon-img icon-share"></div>
              <span class="text">应用分享</span>
              <div class="left">
                <i class="icon-img icon-right"></i>
              </div>
            </div>
          </router-link>
        </li>
        <li>
          <div class="push_voice">
            <div class="icon-img icon-voice"></div>
            <span class="text">语音推送</span>
            <div class="left">
              <switchs :isOpen="is_open" @toggle_switch="toggle_switch"></switchs>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
import Header1 from 'base/header1/header1'
import Switchs from 'base/switchs/switchs'
import {savePushVoice, loadPushVoice} from 'common/js/cache'
import {getUserInfo} from 'api/home'
import {mapMutations, mapGetters} from 'vuex'

export default {
  data () {
    return {
      is_open: true
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  created () {
    this.is_open = loadPushVoice()
    this.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZGVsaXZlcnkub29tYWxsLnRlc3QvdjEvdG9rZW4vbG9naW4iLCJpYXQiOjE1MTc1NTIyMzQsImV4cCI6MTUxNzU1NTgzNCwibmJmIjoxNTE3NTUyMjM0LCJqdGkiOiIwQmtEMHpEY3B0NVJFV3NQIiwic3ViIjo1LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.mj_LvfmyHmmw_aeu7b_KmjQXfBnxaowzC9G4kApukSw'
    /* 获取用户信息 */
    this._getUserInfo()
  },
  methods: {
    toggle_switch () {
      this.is_open = !this.is_open
      savePushVoice(this.is_open)
    },
    _getUserInfo () {
      var self = this
      getUserInfo(this.token).then((res) => {
        console.log(res)
        let status = res.status
        if (status === 401) {
          alert('token错误，请重新登录')
          self.$router.push('/login')
          return
        }
        if (status === 404) {
          alert('用户不存在，并未登录')
          self.$router.push('/login')
          return
        }
        if (status === 500) {
          alert('服务器异常，请刷新重试')
          return
        }
        if (status === 200) {
          let userInfo = res.data.data
          this.set_userInfo(userInfo)
        }
      })
    },
    ...mapMutations({
      set_userInfo: 'SET_USERINFO'
    })
  },
  components: {
    Header1,
    Switchs
  }
}
</script>

<style lang="less">
@import '../../common/less/variable';

.moreSet{
  .list{
    .block,.clear_cache,.check_update,.push_voice{
      display: block;
      padding: 12px 10px;
      border-bottom:1px solid #eee;
    }
    .left {
      float: right;
    }
    .text{
      margin-left: 6px;
      line-height: 20px;
      vertical-align: middle;
      font-size: @font-size-medium;
    }
    .icon-img{
      display: inline-block;
      vertical-align: middle;
      width: 20px;
      height: 20px;
      background-size: contain;
    }
    .icon-edit{
      background: url("./edit.png") no-repeat center;
    }
    .icon-about{
      background: url("./about.png") no-repeat center;
    }
    .icon-check{
      background: url("./check.png") no-repeat center;
    }
    .icon-del{
      background: url("./del.png") no-repeat center;
    }
    .icon-phone{
      background: url("./phone.png") no-repeat center;
    }
    .icon-edit{
      background: url("./edit.png") no-repeat center;
    }
    .icon-share{
      background: url("./share.png") no-repeat center;
    }
    .icon-voice{
      background: url("./voice.png") no-repeat center;
    }
    .icon-right{
      background: url("./to_right.png") no-repeat center;
    }
  }
}
</style>
