import React, { Component } from "react";

import axios from "axios";

import { KEY, REQUEST } from "../keys";
import Nav from "../Nav/Nav";
import Map from "./map/map";

import "./Shelters.scss";

class Shelters extends Component {
  state = {
    shelters: null
  };

  componentWillMount = () => {
    const zip = this.props.match.params.id;

    axios
      .get(`${REQUEST}/shelter.find?format=json&key=${KEY}&location=${zip}`)
      .then(res =>
        this.setState({ shelters: res.data.petfinder.shelters.shelter })
      )
      .catch(err => console.log(err));
  };
  render() {
    const zip = this.props.match.params.id;

    const { shelters } = this.state;

    return (
      <div className="Shelters">
        <Nav />
        <h1>
          Showing Results For <span>{zip}</span>
        </h1>
        {shelters !== null ? <Map shelters={shelters} /> : "Searching ..."}
      </div>
    );
  }
}

export default Shelters;
