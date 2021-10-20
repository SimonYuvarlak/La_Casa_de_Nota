import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/dali_mask.svg";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./Themes";
import Toggle from "./Toggler";
import {useDarkMode} from "./useDarkMode";

function Header() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if(!mountedComponent) return <div/>
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles/>
        <header>
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <h1>
            <Logo style={{ width: "100px", height: "50px", padding: "0px" }} />
            <span style={{ paddingRight: "30px", position: "absolute", color: theme !== "light" && "#363537" }}>
              La Casa de Nota
            </span>
          </h1>
        </header>
      </>
    </ThemeProvider>
  );
}

export default Header;
