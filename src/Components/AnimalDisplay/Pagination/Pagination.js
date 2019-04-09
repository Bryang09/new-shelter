import React, { Component } from "react";

import "./Pagination.scss";

import { Link } from "react-router-dom";

class Pagination extends Component {
  state = {
    pagesArray: [1, 2, 3, 4, 5]
  };

  render() {
    const {
      direction,
      zipOrId,
      page,
      animals,
      animal,
      afterAnimal,
      numberOfPages
    } = this.props;

    const { pagesArray } = this.state;

    console.log(pagesArray);
    console.log(pagesArray.length);

    const display = animals.length >= 50;

    const checkFilter = direction === "filter";

    console.log(numberOfPages);

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
        style={display ? { display: "flex" } : { display: "none" }}
      >
        {mapPages}
      </div>
    );
  }
}

export default Pagination;
