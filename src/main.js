import Vue from 'vue'
import VueRouter from "vue-router";
import router from './router/index'
import App from "./App"
import WalletSummary from "./components/WalletSummary"
import WalletDetailSummary from "./components/WalletDetailSummary"
import WalletDetailItem from "./components/WalletDetailItem"
import CoinBalanceItem from "./components/CoinBalanceItem"

// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'

// router.beforeEach((to, from, next) => {
//   NProgress.start()
//   next()
// })

// router.afterEach(() => {
//   NProgress.done()
// })

Vue.config.productionTip = false


Vue.use(VueRouter)
Vue.component(
  'wallet-summary',WalletSummary
)
Vue.component(
  'wallet-detail-summary',WalletDetailSummary
)
Vue.component(
  'wallet-detail-item',WalletDetailItem
)
Vue.component(
  'coin-balance-item',CoinBalanceItem
)




new Vue({
  router,
  render:h=>h(App)
}).$mount('#app')
