import React, { Component } from "react";

import axios from "axios";
import { REQUEST, KEY } from "../../keys";
import Display from "../Display";
import Pagination from "../Pagination/Pagination";
import Nav from "../../Nav/Nav";

class Cats extends Component {
  state = {
    animals: null
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

  render() {
    const { animals } = this.state;

    const page = this.props.match.params.page;
    const zip = this.props.match.params.zip;

    return (
      <div className="Shelter">
        <Nav />
        <h1>Shelter</h1>
        {animals !== null ? (
          <Display animals={animals} />
        ) : (
          <h1>Searching...</h1>
        )}

        {animals !== null ? (
          <Pagination type="cats" zipOrId={zip} page={page} animals={animals} />
        ) : null}
      </div>
    );
  }
}

export default Cats;
