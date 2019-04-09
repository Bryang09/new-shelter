import React, { Component } from "react";

import axios from "axios";
import { REQUEST, KEY } from "../../keys";
import Display from "../Display";
import Pagination from "../Pagination/Pagination";
import Nav from "../../Nav/Nav";
import Hero from "./Hero/Hero";
import NotFound from "../NotFound/NotFound";

class Shelter extends Component {
  state = {
    animals: null,
    animalsPassed: null
  };

  componentDidMount = () => {
    const id = this.props.match.params.id;
    const page = parseInt(this.props.match.params.page);
    const offset = page === 1 ? 0 : page === 2 ? 50 : page === 3 ? 100 : 1;
    const count = 250;

    axios
      .get(
        //   http:api.petfinder.com/shelter.getPets?format=json&key=8b5f42ac4293d90c5c5cf549de61e57a&location=77502&id=TX2354&count=250
        `${REQUEST}/shelter.getPets?format=json&key=${KEY}&id=${id}&count=${count}`
      )
      .then(res => this.setState({ animals: res.data.petfinder.pets.pet }))
      .catch(err => console.log(err));

    setTimeout(() => {
      const { animals, animalsPassed } = this.state;
      const page = parseInt(this.props.match.params.page);

      const totalResults = animals.length;

      const pages = Math.ceil(totalResults / 50);

      const pageResults = page * 50;

      const indexNotWanted =
        page === 1
          ? 0
          : page === 2
          ? 50
          : page === 3
          ? 100
          : page === 4
          ? 150
          : 200;

      const checkIfTotalGreater = totalResults > pageResults;

      const indexedPassed = animals.filter(
        (res, i) => i < pageResults && i > indexNotWanted
      );

      // IF PAGE 1, PASS 0-50
      // IF PAGE 2, PASS 50-100
      // IF PAGE 3, PASS 100-150

      const subtract = pageResults - 50;

      this.setState({ animalsPassed: indexedPassed });

      console.log(
        totalResults,
        pages,
        pageResults,
        checkIfTotalGreater,
        indexedPassed,
        subtract
      );
    }, 3000);
  };

  render() {
    const { animals, animalsPassed } = this.state;

    const page = this.props.match.params.page;
    const id = this.props.match.params.id;

    const totalResults = animals !== null ? animals.length : 1;

    const numberOfPages = animals !== null ? Math.ceil(totalResults / 50) : 1;

    console.log(animalsPassed);

    console.log(animals);

    return (
      <div className="Shelter">
        {animalsPassed === undefined || animalsPassed === null ? (
          <NotFound />
        ) : (
          <>
            <Nav />
            <Hero animals={animalsPassed} />
            <Display animals={animalsPassed} />
            <Pagination
              direction={`shelter`}
              zipOrId={id}
              page={page}
              animals={animals}
              numberOfPages={numberOfPages}
            />
            <Nav />
          </>
        )}
      </div>
    );
  }
}

export default Shelter;
