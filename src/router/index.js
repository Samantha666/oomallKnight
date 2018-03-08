import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const testdata = (resolve) => {
  import('components/testdata/testdata').then((module) => {
    resolve(module)
  })
}
const forgetPassword = (resolve) => {
  import('components/forgetPassword/forgetPassword').then((module) => {
    resolve(module)
  })
}
const revisePassword = (resolve) => {
  import('components/revisePassword/revisePassword').then((module) => {
    resolve(module)
  })
}
const aboutus = (resolve) => {
  import('components/aboutus/aboutus').then((module) => {
    resolve(module)
  })
}
const leftDrawer = (resolve) => {
  import('components/leftDrawer/leftDrawer').then((module) => {
    resolve(module)
  })
}
const personalCenter = (resolve) => {
  import('components/personalCenter/personalCenter').then((module) => {
    resolve(module)
  })
}
const myWallet = (resolve) => {
  import('components/myWallet/myWallet').then((module) => {
    resolve(module)
  })
}
const addBankCard = (resolve) => {
  import('components/addBankCard/addBankCard').then((module) => {
    resolve(module)
  })
}
const register = (resolve) => {
  import('components/register/register').then((module) => {
    resolve(module)
  })
}
const openingBranchQuery = (resolve) => {
  import('components/openingBranchQuery/openingBranchQuery').then((module) => {
    resolve(module)
  })
}
const login = (resolve) => {
  import('components/login/login').then((module) => {
    resolve(module)
  })
}

const moreSet = (resolve) => {
  import('components/more_set/more_set').then((module) => {
    resolve(module)
  })
}

const bindAccount = (resolve) => {
  import('components/bindAccount/bindAccount').then((module) => {
    resolve(module)
  })
}

const home = (resolve) => {
  import('components/home/home').then((module) => {
    resolve(module)
  })
}

const appSharing = (resolve) => {
  import('components/appSharing/appSharing').then((module) => {
    resolve(module)
  })
}

const authentication = (resolve) => {
  import('components/authentication/authentication').then((module) => {
    resolve(module)
  })
}

const health = (resolve) => {
  import('components/health/health').then((module) => {
    resolve(module)
  })
}

const cards = (resolve) => {
  import('components/cards/cards').then((module) => {
    resolve(module)
  })
}

const applyMoney = (resolve) => {
  import('components/applyMoney/applyMoney').then((module) => {
    resolve(module)
  })
}

const detail = (resolve) => {
  import('components/detail/detail').then((module) => {
    resolve(module)
  })
}

const menuYear = (resolve) => {
  import('components/menuYear/menuYear').then((module) => {
    resolve(module)
  })
}

const menuMouth = (resolve) => {
  import('components/menuMouth/menuMouth').then((module) => {
    resolve(module)
  })
}

const task = (resolve) => {
  import('components/task/task').then((module) => {
    resolve(module)
  })
}

const goodsAchieve = (resolve) => {
  import('components/goods-achieve/goods-achieve').then((module) => {
    resolve(module)
  })
}

const goodsTransport = (resolve) => {
  import('components/goods-transport/goods-transport').then((module) => {
    resolve(module)
  })
}

const goodsWait = (resolve) => {
  import('components/goods-wait/goods-wait').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/testdata',
      name: 'testdata',
      component: testdata
    },
    {
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/forgetPassword',
      name: 'forgetPassword',
      component: forgetPassword
    },
    {
      path: '/revisePassword',
      name: 'revisePassword',
      component: revisePassword
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus
    },
    {
      path: '/leftDrawer',
      name: 'leftDrawer',
      component: leftDrawer
    },
    {
      path: '/personalCenter',
      name: 'personalCenter',
      component: personalCenter
    },
    {
      path: '/myWallet',
      name: 'myWallet',
      component: myWallet
    },
    {
      path: '/addBankCard',
      name: 'addBankCard',
      component: addBankCard
    },
    {
      path: '/openingBranchQuery',
      name: 'openingBranchQuery',
      component: openingBranchQuery
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }, {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/moreSet',
      name: 'moreSet',
      component: moreSet
    },
    {
      path: '/bindAccount',
      name: 'bindAccount',
      component: bindAccount
    },
    {
      path: '/appSharing',
      name: 'appSharing',
      component: appSharing
    },
    {
      path: '/authentication',
      name: 'authentication',
      component: authentication
    },
    {
      path: '/health',
      name: 'health',
      component: health
    },
    {
      path: '/cards',
      name: 'cards',
      component: cards
    },
    {
      path: '/applyMoney',
      name: 'applyMoney',
      component: applyMoney
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/menuYear',
      name: 'menuYear',
      component: menuYear
    },
    {
      path: '/menuMouth',
      name: 'menuMouth',
      component: menuMouth
    },
    {
      path: '/task',
      name: 'task',
      component: task,
      children: [
        {name: 'goodsAchieve', component: goodsAchieve, path: 'goodsAchieve'},
        {name: 'goodsTransport', component: goodsTransport, path: 'goodsTransport'},
        {name: 'goodsWait', component: goodsWait, path: 'goodsWait'}
      ]
    }
  ]
})
