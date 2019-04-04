import React from "react";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <Link to="/">
        <h2>Adopt-A-Pet</h2>
      </Link>
    </div>
  );
};

export default Nav;
