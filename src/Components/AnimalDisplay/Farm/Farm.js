import React, { Component } from "react";

import axios from "axios";
import { REQUEST, KEY } from "../../keys";
import Display from "../Display";
import Pagination from "../Pagination/Pagination";
import Nav from "../../Nav/Nav";
import Sort from "../Sort/Sort";
import NotFound from "../NotFound/NotFound";

class Farm extends Component {
  state = {
    animals: null,
    animalsPassed: null,
    Breed: "",
    Size: "",
    Sex: ""
  };

  componentWillMount = () => {
    const zip = parseInt(this.props.match.params.zip);
    const count = 1000;

    axios
      .get(
        `${REQUEST}/pet.find?format=json&key=${KEY}&location=${zip}&animal=barnyard&count=${count}`
      )
      .then(res =>
        this.setState({ animals: res.data.petfinder.pets.pet }, this.onPage)
      )
      .catch(err => console.log(err));
  };

  onPage = () => {
    const { animals } = this.state;
    const page = parseInt(this.props.match.params.page);

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
        : page === 5
        ? 200
        : page === 6
        ? 250
        : page === 7
        ? 300
        : page === 8
        ? 350
        : page === 9
        ? 400
        : 450;

    const indexedPassed = animals.filter(
      (res, i) => i < pageResults && i > indexNotWanted
    );

    this.setState({ animalsPassed: indexedPassed });
  };

  onBreed = e => {
    this.setState({ Breed: e.target.value });
  };

  onSize = e => {
    this.setState({ Size: e.target.value });
  };

  onSex = e => {
    this.setState({ Sex: e.target.value });
  };

  render() {
    const { animals, Breed, Size, Sex, animalsPassed } = this.state;

    const page = this.props.match.params.page;
    const zip = this.props.match.params.zip;

    const totalResults = animals !== null ? animals.length : 1;

    const numberOfPages = animals !== null ? Math.ceil(totalResults / 50) : 1;

    console.log(animals);
    return (
      <div className="Shelter">
        {animalsPassed === undefined || animalsPassed === null ? (
          <NotFound />
        ) : (
          <>
            <Nav />
            <Sort
              animal="barnyard"
              onBreed={this.onBreed}
              onSize={this.onSize}
              onSex={this.onSex}
              Breed={Breed}
              Size={Size}
              Sex={Sex}
              zip={zip}
            />
            <Display animals={animalsPassed} />
            <Pagination
              direction={`farmAnimals`}
              zipOrId={zip}
              page={page}
              animals={animals}
              numberOfPages={numberOfPages}
            />
          </>
        )}
      </div>
    );
  }
}

export default Farm;
