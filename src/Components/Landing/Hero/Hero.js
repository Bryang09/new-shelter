import React from "react";

import { Link } from "react-router-dom";

import "./Hero.scss";

const Hero = props => {
  const { shelter, onShelterShow, shelterZip, onShelter } = props;

  return (
    <div className="Hero">
      <div className="heroImg" />
      <div className="title">
        <h1>Adopt An Animal Today!</h1>
        <div
          className="button"
          onClick={onShelterShow}
          style={shelter ? { display: "none" } : { display: "flex" }}
        >
          <h5>Search Shelters Near You</h5>
        </div>
        <div
          className="shelterZip"
          style={shelter ? { display: "flex" } : { display: "none" }}
        >
          <form onChange={onShelter}>
            <input type="text" name="shelter" placeholder="Enter Zip Code" />
            <Link to={`/shelters/${shelterZip}`}>
              <button type="submit" />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
