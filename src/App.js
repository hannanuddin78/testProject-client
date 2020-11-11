import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
          <Route exact path="/" component={Home} />
          <Route exact path="/addNewProduct" component={AddNewProduct} />
          <Route exact path="/cartItem" component={CartPage} />
          <Route exact path="/orders" component={OrderDashboard} />
          <Route exact path="/promoCode" component={PromoCodeDeshboard} />
          <Route exact path="/addPromoCode" component={AddPromoCodeNew} />
          <Route exact path="/pendingOrders" component={PendingOrder} />
          <Route exact path="/confirmOrders" component={ConfirmOrder} />
          <Route exact path="/cancelOrders" component={CancelOrder} />
          <Route exact path="/login" component={LogIn} />
          <PrivateRoute path="/admin">
            <AdminDashboard></AdminDashboard>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
