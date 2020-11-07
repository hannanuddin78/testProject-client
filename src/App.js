import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/homePage/home/Home";
import AdminDashboard from "./components/adminPenal/adminDashboard/AdminDashboard";
import AddNewProduct from "./components/adminPenal/addProducts/addNewProduct/AddNewProduct";
import CartPage from "./components/homePage/cartPage/CartPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={AdminDashboard} />
        <Route exact path="/addNewProduct" component={AddNewProduct} />
        <Route exact path="/cartItem" component={CartPage} />
      </Switch>
    </Router>
  );
}

export default App;
