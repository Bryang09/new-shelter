import React, { Component } from "react";

import axios from "axios";
import { REQUEST, KEY } from "../../keys";

class Shelter extends Component {
  state = {
    animals: null
  };

  componentWillMount = () => {
    const id = this.props.match.params.id;

    axios
      .get(`${REQUEST}/shelter.getPets?format=json&key=${KEY}&id=${id}`)
      .then(res => this.setState({ animals: res.data.petfinder.pets.pet }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="Shelter">
        <h1>Shelter</h1>
      </div>
    );
  }
}

export default Shelter;
