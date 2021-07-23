import React, { useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavIcon,
} from "./NavbarItems";
//Icons
import { FiSun, FiMoon } from "react-icons/fi";
import { useDarkMode } from "../../dark-mode/UseDarkMode";
import { lightTheme,darkTheme } from "../../dark-mode/Theme";

const Navbar = (props,{setTheme}) => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const changeTheme = (setTheme) => {
    themeToggler(setTheme);
    props.setTheme(theme)
  }

  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/register" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Sign In</NavBtnLink>
          <NavIcon onClick={changeTheme} >
            {theme == 'dark' ? <FiSun></FiSun> : <FiMoon></FiMoon> }
          </NavIcon>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
