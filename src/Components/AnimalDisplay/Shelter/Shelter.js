import React, { Component } from "react";

import axios from "axios";
import { REQUEST, KEY } from "../../keys";
import Display from "../Display";
import Pagination from "../Pagination/Pagination";
import Nav from "../../Nav/Nav";

class Shelter extends Component {
  state = {
    animals: null
  };

  componentWillMount = () => {
    const id = this.props.match.params.id;
    const page = parseInt(this.props.match.params.page);
    const offset = page === 1 ? 0 : page === 2 ? 50 : page === 3 ? 100 : 1;
    const count = 50;

    axios
      .get(
        `${REQUEST}/shelter.getPets?format=json&key=${KEY}&id=${id}&offset=${offset}
        &count=${count}`
      )
      .then(res => this.setState({ animals: res.data.petfinder.pets.pet }))
      .catch(err => console.log(err));
  };

  render() {
    const { animals } = this.state;

    // console.log(animals.length);

    const page = this.props.match.params.page;
    const id = this.props.match.params.id;

    console.log(page);

    return (
      <div className="Shelter">
        <Nav />
        <h1>Shelter</h1>
        {animals !== null && animals[1] ? (
          <Display animals={animals} />
        ) : (
          <h1>Searching...</h1>
        )}

        {animals !== null ? (
          <Pagination
            type="shelter"
            zipOrId={id}
            page={page}
            animals={animals}
          />
        ) : null}
      </div>
    );
  }
}

export default Shelter;
