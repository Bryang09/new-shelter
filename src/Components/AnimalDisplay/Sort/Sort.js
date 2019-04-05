import React, { Component } from "react";

import axios from "axios";

import "./Sorts.scss";

import { Link } from "react-router-dom";
import { REQUEST, KEY } from "../../keys";

class Sort extends Component {
  state = {
    breeds: null
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
    const { onBreed, onSize, onSex, Breed, Size, Sex, zip, type } = this.props;

    const checkBreed = Breed.length > 0;
    const checkSize = Size.length > 0;
    const checkSex = Sex.length > 0;

    return (
      <div className="Sort">
        <div className="sort breed">
          <h3>Sort By Breed</h3>
          {breeds !== null ? (
            <select onChange={onBreed}>
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
          <select onChange={onSize}>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
          </select>
        </div>
        <div className="sort sex">
          <h3>Sort By Sex</h3>
          <select onChange={onSex}>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
        <Link
          to={
            // CHECK ALL
            checkBreed && checkSize && checkSex
              ? `/filter/1/${zip}/${Breed}/${Size}/${Sex}`
              : // CHECK BREED AND SIZE
              checkBreed && checkSize
              ? `/filter/1/${zip}/${Breed}/${Size}/both`
              : // CHECK BREED AND SEX
              checkBreed && checkSex
              ? `/filter/1/${zip}/${Breed}/any/${Sex}`
              : // CHECK Size AND SEX
              checkSize && checkSex
              ? `/filter/1/${zip}/all/${Size}/${Sex}`
              : // CHECK BREED
              checkBreed
              ? `/filter/1/${zip}/${Breed}/any/both`
              : // CHECK SIZE
              checkSize
              ? `/filter/1/${zip}/all/${Size}/both`
              : // CHECK SEX
              checkSex
              ? `/filter/1/${zip}/all/any/${Sex}`
              : null
          }
          style={
            checkBreed || checkSex || checkSize
              ? { display: "flex" }
              : { display: "none" }
          }
        >
          <h4>Filter</h4>
        </Link>
      </div>
    );
  }
}

export default Sort;