import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import AllProducts from './pages/AllProducts/AllProducts';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/allproducts" component={AllProducts} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
