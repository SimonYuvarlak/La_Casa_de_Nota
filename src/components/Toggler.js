import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components";
import NightsStay from "@material-ui/icons/NightsStay";
import WbSunny from "@material-ui/icons/WbSunny";

const Span = styled.span`
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  float: right;
  }
`;

const Toggle = ({theme,  toggleTheme }) => {
    
    return (
        <Span onClick={toggleTheme} >
          {theme === "light" ? <WbSunny style={{color: "white"}}/> :  <NightsStay />}
        </Span>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;
