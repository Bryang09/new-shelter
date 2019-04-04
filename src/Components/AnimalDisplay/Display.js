import React from "react";

import "./Display.scss";
import Pagination from "./Pagination/Pagination";

const Display = props => {
  console.log(props);

  const { animals } = props;

  const animal = animals.map((res, i) => {
    return (
      <div
        className="Animal"
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
        key={i}
      >
        <h4>{res.name.$t}</h4>
      </div>
    );
  });
  return <div className="Display">{animal}</div>;
};

export default Display;
