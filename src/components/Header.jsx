import React from "react";
import Note from "@material-ui/icons/Note";
import { ReactComponent as Logo } from "../assets/dali_mask.svg";

function Header() {
  return (
    <header>
      <h1>
        <Logo style={{ width: "100px", height: "50px", padding: "0px" }} />
        {/* <Note style={{ marginRight: "10px" }} /> */}
        <span style={{ paddingRight: "30px", position: "absolute" }}>
          La Casa de Nota
        </span>
      </h1>
    </header>
  );
}

export default Header;
