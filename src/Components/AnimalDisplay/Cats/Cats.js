import React, { Component } from "react";

import axios from "axios";
import { REQUEST, KEY } from "../../keys";
import Display from "../Display";
import Pagination from "../Pagination/Pagination";
import Nav from "../../Nav/Nav";

import Sort from "../Sort/Sort";
import NotFound from "../NotFound/NotFound";

class Cats extends Component {
  state = {
    animals: null,
    Breed: "",
    Size: "",
    Sex: ""
  };

  componentWillMount = () => {
    const zip = parseInt(this.props.match.params.zip);
    const page = parseInt(this.props.match.params.page);
    const offset = page === 1 ? 0 : page === 2 ? 50 : page === 3 ? 100 : 1;
    const count = 50;

    axios
      .get(
        `${REQUEST}/pet.find?format=json&key=${KEY}&location=${zip}&offset=${offset}&animal=cat&count=${count}`
      )
      .then(res => this.setState({ animals: res.data.petfinder.pets.pet }))
      .catch(err => console.log(err));
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
    const { animals, Breed, Size, Sex } = this.state;

    const page = this.props.match.params.page;
    const zip = this.props.match.params.zip;

    return (
      <div className="Shelter">
        {animals === undefined || animals === null ? (
          <NotFound />
        ) : (
          <>
            <Nav />
            <Sort
              animal="cat"
              onBreed={this.onBreed}
              onSize={this.onSize}
              onSex={this.onSex}
              Breed={Breed}
              Size={Size}
              Sex={Sex}
              zip={zip}
            />
            <Display animals={animals} />
            <Pagination
              direction={`cats`}
              zipOrId={zip}
              page={page}
              animals={animals}
            />
          </>
        )}
      </div>
    );
  }
}

export default Cats;
