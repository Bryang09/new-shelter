import React, { Component } from "react";

import axios from "axios";

import { KEY, REQUEST } from "../keys";

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
    console.log(this.state.shelters);

    return (
      <div className="Shelters">
        <h1>Shelters</h1>
      </div>
    );
  }
}

export default Shelters;
