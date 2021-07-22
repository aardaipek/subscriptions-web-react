import { Route, Switch } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SubscriptionsPage from "./pages/SubscriptionsPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from '../src/components/ui-components/navigation/Navbar'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Switch>
        <Route path="/home">
          <SubscriptionsPage></SubscriptionsPage>
        </Route>
        <Route path="/login">
          <LoginPage></LoginPage>
        </Route>
        <Route path="/register">
          <RegisterPage></RegisterPage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
