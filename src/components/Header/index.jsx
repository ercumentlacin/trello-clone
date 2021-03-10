import React from "react";
import { Link } from "react-router-dom";
import HeaderStyled from "./styles";

function Header() {
  return (
    <HeaderStyled>
      <div className="container-fluid">
        <div className="row py-2">
          <div className="col-4 col-sm-4">
            <Link to={"/"}>
              <i className="fas fa-home" />
            </Link>
          </div>
          <div className="col-4 col-sm-4 text-center">
            <Link to={"/"}>Trello</Link>
          </div>
          <div className="col-4 col-sm-4 text-end">
            <Link to={"/"}>
              <i className="far fa-user"></i>
            </Link>
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
}

export default Header;
