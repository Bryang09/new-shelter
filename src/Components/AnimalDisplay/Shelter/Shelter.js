import React, { Component } from "react";

import axios from "axios";
import { REQUEST, KEY } from "../../keys";
import Display from "../Display";
import Pagination from "../Pagination/Pagination";
import Nav from "../../Nav/Nav";
import Hero from "./Hero/Hero";

class Shelter extends Component {
  state = {
    animals: null,
    hero: "full"
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

  timeout = () => {};

  componentDidMount = () => {
    return setTimeout(() => {
      this.setState({ hero: "compressed " });
    }, 2000);
  };
  render() {
    const { animals, hero } = this.state;

    const page = this.props.match.params.page;
    const id = this.props.match.params.id;

    console.log(animals);

    return (
      <div className="Shelter">
        <Nav />
        <Hero
          hero={hero}
          animals={
            animals !== null ? animals : [{ info: "Loading" }, { infoL: "" }]
          }
        />
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
