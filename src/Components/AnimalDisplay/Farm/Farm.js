import React, { Component } from "react";

import axios from "axios";
import { REQUEST, KEY } from "../../keys";
import Display from "../Display";
import Pagination from "../Pagination/Pagination";
import Nav from "../../Nav/Nav";
import Sort from "../Sort/Sort";

class Farm extends Component {
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
        `${REQUEST}/pet.find?format=json&key=${KEY}&location=${zip}&offset=${offset}&animal=barnyard&count=${count}`
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
        {animals !== null && animals[1] ? (
          <Display animals={animals} />
        ) : (
          <h1>Searching...</h1>
        )}

        {animals !== null ? (
          <Pagination
            direction={`farmAnimals`}
            zipOrId={zip}
            page={page}
            animals={animals}
          />
        ) : null}
      </div>
    );
  }
}

export default Farm;
