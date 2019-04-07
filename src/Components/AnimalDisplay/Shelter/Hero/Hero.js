import React from "react";

import "./Hero.scss";

const Hero = props => {
  const { hero, animals } = props;

  console.log(hero);

  const info = animals[0].contact;

  console.log(info);

  return (
    <div className={`shelterHero ${hero}`}>
      {info !== undefined ? (
        <div>
          <h1>{info.address1.$t}</h1>
          <h3>
            {info.city.$t}, {info.state.$t} {info.zip.$t}
          </h3>
          <h4>{info.phone.$t}</h4>
          <h4>{info.email.$t}</h4>
        </div>
      ) : (
        <h1>Searching...</h1>
      )}
    </div>
  );
};

export default Hero;
