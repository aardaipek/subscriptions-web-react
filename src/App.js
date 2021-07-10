import { Route, Switch } from "react-router-dom";

import Login from "./pages/login";
import TodoPage from "./pages/todo";
import NavigationBar from "./components/layout/navigation";

function App() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Switch>
        <Route path="/home">
          <TodoPage></TodoPage>
        </Route>
        <Route path="/">
          <Login></Login>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
