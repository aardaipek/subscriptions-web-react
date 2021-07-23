import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
//Components
import LoginPage from "./pages/LoginPage";
import SubscriptionsPage from "./pages/SubscriptionsPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "../src/components/ui-components/navigation/Navbar";
//Dark Mode
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/dark-mode/Global-Styles";
import { darkTheme, lightTheme } from "./components/dark-mode/Theme";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <button onClick={themeToggler}>Switch Theme</button>
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
    </ThemeProvider>
  );
}

export default App;
