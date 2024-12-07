import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./containers/Home";
import { Login } from "./containers/Login";
import { CreateProduct } from "./containers/CreateProduct";
import { Products } from "./containers/Products";
import { Moviments } from "./containers/Moviments";
import { PAGE } from "./constants";
import { AppContainer } from "./components";

function App() {

  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path={PAGE.LOGIN()} element={<Login />} />
          <Route path={PAGE.HOME()} element={<Home />} />
          <Route path={PAGE.CREATE_PRODUCTS()} element={<CreateProduct/>} />
          <Route path={PAGE.LIST_PRODUCTS()} element={<Products/>} />
          <Route path={PAGE.LIST_MOVIMENTS()} element={<Moviments/>} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
