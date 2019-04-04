import React, { Component } from "react";

import axios from "axios";

import "./Sorts.scss";
import { REQUEST, KEY } from "../../keys";

class Sort extends Component {
  state = {
    breeds: null,
    breed: "",
    size: "",
    sex: ""
  };

  componentWillMount = () => {
    const type = this.props.type;
    // http://api.petfinder.com/breed.list?format=json&key=8b5f42ac4293d90c5c5cf549de61e57a&animal=dog
    axios
      .get(`${REQUEST}/breed.list?format=json&key=${KEY}&animal=${type}`)
      .then(res => this.setState({ breeds: res.data.petfinder.breeds.breed }))
      .catch(err => console.log(err));
  };

  render() {
    const { breeds } = this.state;

    console.log(breeds);

    return (
      <div className="Sort">
        <div className="sort breed">
          <h3>Sort By Breed</h3>
          {breeds !== null ? (
            <select>
              {breeds.map((res, i) => {
                return (
                  <option value={res.$t} key={i}>
                    {res.$t}
                  </option>
                );
              })}
            </select>
          ) : null}
        </div>
        <div className="sort size">
          <h3>Sort By Size</h3>
          <select>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div className="sort sex">
          <h3>Sort By Sex</h3>
          <select>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Sort;
