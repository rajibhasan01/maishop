import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import AllProducts from './pages/AllProducts/AllProducts';
import SingleProduct from './pages/Home/SingleProduct/SingleProduct';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/allproducts" component={AllProducts} />
          <Route exact path="/products/:productID" component={SingleProduct} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
