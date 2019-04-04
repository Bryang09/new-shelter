import React from "react";

import "./Pagination.scss";

import { Link } from "react-router-dom";

const Pagination = props => {
  const { type, zipOrId, page, animals } = props;

  console.log(animals.length);

  const display = animals.length >= 50;

  console.log(display);

  return (
    <div
      className="Pagination"
      style={display ? { display: "flex" } : { display: "none" }}
    >
      <Link
        to={`/${type}/${zipOrId}/1`}
        className={parseInt(page) === 1 ? "active" : null}
      >
        <h4>1</h4>
      </Link>
      <Link
        to={`/${type}/${zipOrId}/2`}
        className={parseInt(page) === 2 ? "active" : null}
      >
        <h4>2</h4>
      </Link>
      <Link
        to={`/${type}/${zipOrId}/3`}
        className={parseInt(page) === 3 ? "active" : null}
      >
        <h4>3</h4>
      </Link>
    </div>
  );
};

export default Pagination;
