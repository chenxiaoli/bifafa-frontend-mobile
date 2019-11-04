import VueRouter from "vue-router";
import Market from "../views/Market";
import Trade from "../views/Trade";
import Home from "../views/Home";
import Register from "../views/auth/Register";
import Login from "../views/auth/Login";
import Forgot from "../views/auth/Forgot";
import CoinSelect from "../views/wallet/CoinSelect"
import MyRoutes from "../views/my/MyRoutes"
import QrScan from "../views/QrScan"


const My = {
    template: `
      <div class="my">
        <router-view></router-view>
      </div>
    `
  }

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/market",
    component: Market
  },
  {
    path: "/trade",
    component: Trade
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/forgot",
    component: Forgot
  },
  {
    path: "/coin-select",
    component:CoinSelect
  },
    {
        path: "/my",
        component: My,
        children: MyRoutes
  },
  {
    path: "/qr-scan",
    component: QrScan,
    name:"qr-scan"
    
  },
];
export default new VueRouter({
  routes
});
