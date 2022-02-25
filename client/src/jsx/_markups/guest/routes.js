/* import { Home } from "./_pages/home/Home";
import { Orders } from "./_pages/order/Orders";
import OrderConfirmation from "./_pages/offer/create.order.page";
import { Wallet } from "./_pages/wallet/index";
import WalletHistory from "./_pages/wallet/wallet.history.page";
import { Wallet_deposit } from "./_pages/wallet/Wallet_deposit";
import { Wallet_withdraw } from "./_pages/wallet/Wallet_withdraw";
import { Wallet_trade } from "./_pages/wallet/Wallet_trade";
import { Trade_crypto } from "./_pages/wallet/Trade_crypto";
import { Wallet_verification } from "./_pages/wallet/Wallet_verification";
import { Wallet_verification2 } from "./_pages/wallet/Wallet_verification2";
import { Trade } from "./_pages/trades/trades.page";
import { Support } from "./_pages/support/Support";
import { Affiliate } from "./_pages/affiliate/Affiliate";
import Ad_create from "./_pages/ad/Ad_create";
import { Ad_payment_method } from "./_pages/ad/Ad_payment_method";
import { Ad_contract } from "./_pages/ad/Ad_contract";
import Mypage from "./_pages/me";
// import { Mypage2 } from "./pages/me/Mypage2";
import { Verification } from "./_pages/verification/Verification";
import { Frame01 } from "./_pages/frame/Frame01";
import { Order_completed } from "./_pages/trades/Order_completed";
import { Order_completed2 } from "./_pages/trades/Order_completed2";
import Register from "./_pages/register";
import ConfirmEmail from "./_pages/auth/confirm.email.page";

// import Login from "./pages/login";
import Login from "./_pages/login";
*/
import { toQueryString } from "../../_helpers/navigations.helper";
import { camelCase } from "../../_helpers/utils.helper";
// import { RouteObject } from "react-router-dom";

// HOME
import Home from "./pages/home";

// ORDER
import Orders from "./pages/order";
import OrderByID from "./pages/order/id.page";
import OrderByUserID from "./pages/order/user.page";

// ORDER
import Adverts from "./pages/advert";
import AdvertByID from "./pages/advert/id.page";
import CreateAdvert from "./pages/advert/create.page";
import AdvertByUserID from "./pages/advert/user.id.page";

// WALLET
import Wallets from "./pages/wallet";
import WalletByID from "./pages/wallet/id.page";

// AFFILIATE
import Affiliates from "./pages/affiliate";

// ME
import Me from "./pages/me";

// AUTH
import Register from "./pages/auth/register.page";
import Login from "./pages/auth/login.page";
import ChangePassword from "./pages/auth/change.password.page";
import ForgotPassword from "./pages/auth/forgot.page";
import VerifyEmail from "./pages/auth/verify.email.page";
import VerifyOTP from "./pages/auth/verify.otp";

// SUPPORT
import Supports from "./pages/support";
import SupportByID from "./pages/support/id.page";

// PAYMENT METHODS
// import PaymentMethods from "./pages/payment";
import AddPaymentMethod from "./pages/payment/add.page";

// NO MATCH
import NoMatch from "../_shared/component/error404.component";

export const routeMap = {
  home: "/",

  // AUTH
  login: "/auth/login",
  register: "/auth/register",
  changePassword: "/auth/changePassword",
  forgot: "/auth/forgot",
  verifyEmail: "/auth/verify/email",
  verifyOTP: "/auth/verify/otp",

  // ORDER
  order: "/order",
  orderByID: "/order/:id",
  orderByUserID: "/order/user/:id",

  // OFFER
  advert: "/advert",
  advertByID: "/advert/:id",
  advertByUserID: "/advert/user/:id",
  createAdvert: "/advert/create",

  // WALLET
  wallet: "/wallet",
  walletByID: "/wallet/:id",

  // AFFILIATE
  affiliate: "/affiliate",

  // SUPPORT
  support: "/support",
  supportByID: "/support/:id",

  // ME
  me: "/me",

  // PAYMENT
  addPayment: "/payment/add/:type",
};
const routes = [
  /*   {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/order",
        element: <Orders />,
        children: [
          { index: true, element: <Orders /> },
          { path: "/order/:id", element: <OrderByID /> },
          {
            path: "/order/user/:id",
            element: OrderByUserID,
          },
        ],
      },
      {
        path: "/wallet",
        element: <Wallets />,
        children: [
          { index: true, element: <Wallets /> },
          { path: "/wallet/:id", element: <WalletByID /> },
        ],
      },
      {
        path: "/offer",
        element: <Offers />,
        children: [
          { index: true, element: <Offers /> },
          { path: "/offer/:id", element: <OfferByID /> },
          {
            path: "/offer/create",
            element: CreateOffer,
          },
        ],
      },
      {
        path: "/me",
        element: <Me />,
      },
      {
        path: "/support",
        element: <Supports />,
        children: [
          { index: true, element: <Supports /> },
          { path: "/support/:id", element: <SupportByID /> },
        ],
      },
      {
        path: "/payment/add/:type",
        element: <AddPaymentMethod />,
      },
      {
        path: "/auth",
        element: <Layout />,
        children: [
          { index: true, element: <Login /> },
          { path: "/auth/login", element: <Login /> },
          { path: "/auth/register", element: <Register /> },
          { path: "/auth/reset", element: <Reset /> },
          {
            path: "/auth/verify/email",
            element: <VerifyEmail />,
          },
          {
            path: "/auth/verify/otp",
            element: <VerifyOTP />,
          },
        ],
      },
      { path: "*", element: <NoMatch /> },
    ],
  }, */
  { path: routeMap?.home, element: Home, title: "Home" },

  { path: routeMap?.order, element: Orders, title: "Orders" },
  { path: routeMap?.orderByID, element: OrderByID, title: "Order" },
  {
    path: routeMap?.orderByUserID,
    element: OrderByUserID,
    title: "User Orders", 
    auth: true,
  },

  { path: routeMap?.advert, element: Adverts, title: "Trades" },
  {
    path: routeMap?.createAdvert,
    auth: true,
    element: CreateAdvert,
    title: "Create trade",
  },
  {
    path: routeMap?.advertByID,
    auth: true,
    element: AdvertByID,
    title: "Trade offer",
  },
  {
    path: routeMap?.advertByUserID,
    element: AdvertByUserID,
    title: "Trade offer",
    auth: true,
  },

  { path: routeMap?.wallet, element: Wallets, auth: true, title: "Wallet" },
  {
    path: routeMap?.walletByID,
    auth: true,
    element: WalletByID,
    title: "Wallet",
  },

  {
    path: routeMap?.affiliate,
    auth: true,
    element: Affiliates,
    title: "Affiliate",
  },

  { path: routeMap?.me, auth: true, element: Me, title: "User profile" },

  { path: routeMap?.support, element: Supports, title: "Support" },
  { path: routeMap?.supportByID, element: SupportByID, title: "Support" },

  { path: routeMap?.login, element: Login, title: "Login" },
  { path: routeMap?.register, element: Register, title: "Register" },
  { path: routeMap?.changePassword, element: ChangePassword, title: "Reset Password" },
  { path: routeMap?.forgot, element: ForgotPassword, title: "Forgot Password" },
  { path: routeMap?.verifyEmail, element: VerifyEmail, title: "Verify Email" },
  { path: routeMap?.verifyOTP, element: VerifyOTP, title: "Verify OTP" },

  {
    path: routeMap?.addPayment,
    element: AddPaymentMethod,
    title: "Add Payment method",
    auth: true,
  },
  /* {
    path: "/confirm/email",
    element: ConfirmEmail,
    title: "Confirm account email",
  },
  { path: "order", element: Orders, title: "Orders" },
  {
    path: "order",
    element: OrderConfirmation,
    title: "OTC Order",
    auth: true,
  },
  { path: "signup", element: Register, title: "Sign Up" },
  { path: "wallet", element: Wallet, title: "Wallet", auth: true },
  {
    path: "wallet_deposit",
    element: Wallet_deposit,
    title: "Wallet",
    auth: true,
  },
  {
    path: "wallet_withdraw",
    element: Wallet_withdraw,
    title: "Wallet",
    auth: true,
  },
  { path: "wallet/history", element: WalletHistory, title: "Wallet", auth: true },
  // { path: "wallet_trade", element: Wallet_trade, title: "Wallet", auth: true },
  // { path: "trade_crypto", element: Trade_crypto, title: "" },
  { path: "trade", element: Trade, title: "P2P Trade" },

  { path: "order_completed", element: Order_completed, title: "", auth: true },
  // {
  //   path: "order_completed2",
  //   element: Order_completed2,
  //   title: "",
  //   auth: true,
  // },
  { path: "support", element: Support, title: "Support" },
  { path: "affiliate", element: Affiliate, title: "Affiliate", auth: true },
  { path: "offer/create", element: Ad_create, title: "Create Ad", auth: true },
  {
    path: "ad_payment_method",
    element: Ad_payment_method,
    title: "Create Ad",
  },
  {
    path: "ad_contract",
    element: Ad_contract,
    title: "Create Ad",
    auth: true,
  },
  { path: "me", element: Mypage, title: "My Page", auth: true },
  // { path: "me-2", element: Mypage2, title: "", auth: true },
  { path: "verification", element: Verification, title: "Email Verification" },
  // { path: "frame01", element: Frame01, title: "" },
  { path: "wallet_verification", element: Wallet_verification, title: "" },
  { path: "wallet_verification2", element: Wallet_verification2, title: "" },
  { path: "login", element: Login, title: "Login" },
  {
    path: "reset_password",
    element: Resetpassword,
    title: "Reset Password",
    auth: true,
  }, */
  { path: "*", element: NoMatch, title: "Error" },
];

export const genRoute = () => {
  const linkCreator = {};
  const exclude = ["*"];
  routes.forEach((route) => {
    let key = camelCase(route.path.replace("-", " "));
    if (exclude.includes(route.path)) return;
    if (route.create) {
      linkCreator[key] = route?.create;
    } else {
      linkCreator[key] = (obj) => route.path + toQueryString(obj);
    }
  });

  return linkCreator;
};

export default routes;
