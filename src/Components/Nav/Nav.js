import React from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Nav.scss";

const Nav = () => {
  return (
    <>
      <Link to="/">
        {" "}
        <div className="Nav">
          <FontAwesomeIcon icon="paw" size="2x" />
          {/* <img src="http://clipart-library.com/images/8i686BBBT.gif" alt="" /> */}
        </div>{" "}
      </Link>
    </>
  );
};

export default Nav;
