import React from "react";

import { Link } from "react-router-dom";

import "./map.scss";

const Map = props => {
  const { shelters } = props;

  const shelter = shelters.map((res, i) => {
    const even = (i + 1) % 2 === 0;
    const odd = (i + 1) % 2 !== 0;
    const threes = (i + 1) % 3 === 0;

    return (
      <Link to={`/shelter/${res.id.$t}/1`}>
        <div
          className={
            even && threes
              ? "shelter threes"
              : even
              ? "shelter even"
              : odd && threes
              ? "shelter threes"
              : odd
              ? "shelter odd"
              : null
          }
          key={i}
        >
          <h5>{res.name.$t}</h5>
          <div className="info">
            <h5>{res.address1.$t}</h5>
            <h5>
              {res.city.$t}, {res.state.$t}
            </h5>
            <h6>{res.phone.$t}</h6>
            <h6>{res.email.$t}</h6>
          </div>
        </div>
      </Link>
    );
  });
  return <div className="sheltersContainer">{shelter}</div>;
};

export default Map;
