import Home from './Home'
import Wallet from "../wallet/Wallet"
import WalletDetail from "../wallet/WalletDetail"
import Deposit from "../wallet/Deposit"
import Withdraw from "../wallet/Withdraw"
import AddressBook from "../wallet/AddressBook"
import AddAddress from "../wallet/AddAddress"
import MoneyTransfer from "../wallet/MoneyTransfer"
import WithdrawList from "../wallet/WithdrawList"
import DepositList from "../wallet/DepositList"

const routes = [
    {
      path: "",
      component: Home
  },
  {
    path: "/wallet",
    component: Wallet
  },
  {
    path: "/wallet/coin/:id/address-book",
    component: AddressBook
  },
  {
    path: "/wallet/coin/:id/address-book-new",
    component: AddAddress
  },
  {
    path: "/wallet/money-transfer",
    component: MoneyTransfer,
    name:"money-transfer"
  },
  {
    path: "/wallet/coin/:id",
    component: WalletDetail
  },
  {
    path: "/wallet/coin/:id/deposit",
    component: Deposit,
    name:'deposit'
  },
  {
    path: "/wallet/coin/:id/withdraw",
    component: Withdraw,
    name:"withdraw"
  },  {
    path: "/wallet/coin/:id/withdraw-list",
    component: WithdrawList,
    name:"withdraw-list"
  },  {
    path: "/wallet/coin/:id/deposit-list",
    component: DepositList,
    name:"deposit-list"
  }
];
  
export default routes