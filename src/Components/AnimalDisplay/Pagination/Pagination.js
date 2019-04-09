import React, { Component } from "react";

import "./Pagination.scss";

import { Link } from "react-router-dom";

class Pagination extends Component {
  state = {
    // prettier-ignore
    pagesArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20]
  };

  render() {
    const {
      direction,
      zipOrId,
      page,
      animal,
      afterAnimal,
      numberOfPages
    } = this.props;

    const { pagesArray } = this.state;

    const checkFilter = direction === "filter";

    const mapPages = pagesArray
      .filter(i => i <= parseInt(numberOfPages))
      .map((res, i) => {
        const newIndex = i + 1;
        return (
          <Link
            key={i}
            to={
              checkFilter
                ? `/${direction}/${newIndex}/${zipOrId}/${animal}/${afterAnimal}`
                : `/${direction}/${zipOrId}/${newIndex}`
            }
            className={parseInt(page) === newIndex ? "active" : null}
          >
            <h4>{newIndex}</h4>
          </Link>
        );
      });

    return (
      <div
        className="Pagination"
        // style={display ? { display: "flex" } : { display: "none" }}
      >
        {mapPages}
      </div>
    );
  }
}

export default Pagination;
