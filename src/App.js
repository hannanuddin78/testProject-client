import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/homePage/home/Home";
import AdminDashboard from "./components/adminPenal/adminDashboard/AdminDashboard";
import AddNewProduct from "./components/adminPenal/addProducts/addNewProduct/AddNewProduct";
import CartPage from "./components/homePage/cartPage/CartPage";
import { createContext, useState } from "react";
import OrderDashboard from "./components/adminPenal/order/orderDashboard/OrderDashboard";
import PromoCodeDeshboard from "./components/adminPenal/promoCodeDeshboard/PromoCodeDeshboard";
import AddPromoCodeNew from "./components/adminPenal/promoCodeDeshboard/addPromoCodeNew/AddPromoCodeNew";
import PendingOrder from "./components/adminPenal/order/orderDashboard/orderDetails/pendingOrder/PendingOrder";
import ConfirmOrder from "./components/adminPenal/order/orderDashboard/orderDetails/confirmOrder/ConfirmOrder";
import CancelOrder from "./components/adminPenal/order/orderDashboard/orderDetails/cancelOrder/CancelOrder";
import LogIn from "./components/login/LogIn";
import PrivateRoute from "./components/login/PrivateRoute/PrivateRoute";
import PromoCodeEdit from "./components/adminPenal/promoCodeDeshboard/promoCodeDetails/promoDetails/promoCodeEdit/PromoCodeEdit";
import ProductEdit from "./components/adminPenal/addProducts/allProducts/products/productEdit/ProductEdit";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [searchValue, setSearchValue] = useState([]);
  const [login, setLogin] = useState({});
  return (
    <UserContext.Provider
      value={[loggedInUser, setLoggedInUser, searchValue, setSearchValue, login, setLogin]}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/addNewProduct">
            <AddNewProduct></AddNewProduct>
          </Route>
          <Route exact path="/cartItem">
            <CartPage></CartPage>
          </Route>
          <PrivateRoute exact path="/admin">
            <AdminDashboard></AdminDashboard>
          </PrivateRoute>
          <PrivateRoute exact path="/orders">
            <OrderDashboard></OrderDashboard>
          </PrivateRoute>
          <PrivateRoute exact path="/productEdit/:pdId">
            <ProductEdit></ProductEdit>
          </PrivateRoute>
          <PrivateRoute exact path="/promoCode">
            <PromoCodeDeshboard></PromoCodeDeshboard>
          </PrivateRoute>
          <PrivateRoute exact path="/addPromoCode">
            <AddPromoCodeNew></AddPromoCodeNew>
          </PrivateRoute>
          <PrivateRoute exact path="/pendingOrders">
            <PendingOrder></PendingOrder>
          </PrivateRoute>
          <PrivateRoute exact path="/confirmOrders">
            <ConfirmOrder></ConfirmOrder>
          </PrivateRoute>
          <PrivateRoute exact path="/cancelOrders">
            <CancelOrder></CancelOrder>
          </PrivateRoute>
          <Route exact path="/login">
            <LogIn></LogIn>
          </Route>
          <PrivateRoute exact path="/updatePromoCode/:id">
            <PromoCodeEdit></PromoCodeEdit>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
