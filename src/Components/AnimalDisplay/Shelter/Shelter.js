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

    const page = this.props.match.params.page;
    const id = this.props.match.params.id;

    console.log(animals);

    return (
      <div className="Shelter">
        {animals === undefined || animals === null ? (
          <NotFound />
        ) : (
          <>
            <Nav />
            <Hero animals={animals} />
            <Display animals={animals} />
            <Pagination
              direction={`shelter`}
              zipOrId={id}
              page={page}
              animals={animals}
            />
            <Nav />
          </>
        )}
      </div>
    );
  }
}

export default Shelter;
