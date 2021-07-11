import { Route, Switch } from "react-router-dom";

import Login from "./pages/LoginPage";
import SubscriptionsPage from "./pages/SubscriptionsPage";
import NavigationBar from "./components/layout/navigation";

function App() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Switch>
        <Route path="/home">
          <SubscriptionsPage></SubscriptionsPage>
        </Route>
        <Route path="/">
          <Login></Login>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
