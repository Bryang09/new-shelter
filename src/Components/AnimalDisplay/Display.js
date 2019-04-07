import React from "react";

import { Link } from "react-router-dom";

import "./Display.scss";

const Display = props => {
  const { animals } = props;
  console.log(animals);

  const animal = animals.map((res, i) => {
    return (
      <div className="Animal" key={i}>
        <Link to={`/shelter/${res.shelterId.$t}/1`}>
          <div
            className="img"
            style={
              res.media.photos
                ? { backgroundImage: `url(${res.media.photos.photo[2].$t})` }
                : {
                    backgroundImage:
                      "url(http://clipart-library.com/images/8i686BBBT.gif)",
                    backgroundColor: "#eee",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"
                  }
            }
          >
            <div className="info">
              <h4 className="name">{res.name.$t}</h4>
              <h4>{res.breeds.breed ? res.breeds.breed.$t : null}</h4>
              <h4>
                {res.sex.$t === "M" ? "Male" : "Female"} -{" "}
                {res.size.$t === "S"
                  ? "Small"
                  : res.size.$t === "M"
                  ? "Medium"
                  : "Large"}
              </h4>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <div className="Display">{animal}</div>;
};

export default Display;
