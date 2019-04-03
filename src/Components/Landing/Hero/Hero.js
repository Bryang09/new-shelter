import React from "react";

import "./Hero.scss";

const Hero = props => {
  const { shelter, onShelter } = props;
  return (
    <div className="Hero">
      <div className="heroImg" />
      <div className="title">
        <h1>Adopt An Animal Today!</h1>
        <div
          className="button"
          onClick={onShelter}
          style={shelter ? { display: "none" } : { display: "flex" }}
        >
          <h5>Search Shelters Near You</h5>
        </div>
        <div
          className="shelterZip"
          style={shelter ? { display: "flex" } : { display: "none" }}
        >
          <input type="text" name="shelter" placeholder="Enter Zip Code" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
