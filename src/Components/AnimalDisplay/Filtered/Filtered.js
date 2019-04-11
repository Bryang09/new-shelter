import React, { Component } from "react";

import axios from "axios";
import { REQUEST, KEY } from "../../keys";
import Nav from "../../Nav/Nav";
import Display from "../Display";
import Pagination from "../Pagination/Pagination";

import { Link } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

class Filtered extends Component {
  state = {
    animals: null,
    Breed: "",
    Size: "",
    Sex: ""
  };

  componentWillMount = () => {
    const zip = parseInt(this.props.match.params.zip);
    const page = parseInt(this.props.match.params.page);
    const animal = this.props.match.params.animal;
    const breed = this.props.match.params.breed;
    const size = this.props.match.params.size;
    const sex = this.props.match.params.sex;
    const offset = page === 1 ? 0 : page === 2 ? 50 : page === 3 ? 100 : 1;
    const count = 50;

    const checkBreed = breed !== "all";
    const checkSize = size !== "any";
    const checkSex = sex !== "both";

    // CHECK ALL
    checkBreed && checkSize && checkSex
      ? axios
          .get(
            `${REQUEST}/pet.find?format=json&key=${KEY}&location=${zip}&offset=${offset}&count=${count}&animal=${animal}&breed=${breed}&size=${size}&sex=${sex}`
          )
          .then(res => this.setState({ animals: res.data.petfinder.pets.pet }))
          .catch(err => console.log(err))
      : // CHECK BREED AND SIZE
      checkBreed && checkSize
      ? axios
          .get(
            // http://api.petfinder.com/pet.find?format=json&key=&location=77502&animal=dog&breed=Siberian%20Husky&size=L&sex=M

            `${REQUEST}/pet.find?format=json&key=${KEY}&location=${zip}&offset=${offset}&count=${count}&animal=${animal}&breed=${breed}&size=${size}`
          )
          .then(res => this.setState({ animals: res.data.petfinder.pets.pet }))
          .catch(err => console.log(err))
      : // // CHECK BREED AND SEX
      checkBreed && checkSex
      ? axios
          .get(
            `${REQUEST}/pet.find?format=json&key=${KEY}&location=${zip}&offset=${offset}&count=${count}&animal=${animal}&breed=${breed}&sex=${sex}`
          )
          .then(res => this.setState({ animals: res.data.petfinder.pets.pet }))
          .catch(err => console.log(err))
      : // CHECK Size AND SEX
      checkSize && checkSex
      ? axios
          .get(
            `${REQUEST}/pet.find?format=json&key=${KEY}&location=${zip}&offset=${offset}&count=${count}&animal=${animal}&size=${size}&sex=${sex}`
          )
          .then(res => this.setState({ animals: res.data.petfinder.pets.pet }))
          .catch(err => console.log(err))
      : // CHECK BREED
      checkBreed
      ? axios
          .get(
            `${REQUEST}/pet.find?format=json&key=${KEY}&location=${zip}&offset=${offset}&count=${count}&animal=${animal}&breed=${breed}`
          )
          .then(res => this.setState({ animals: res.data.petfinder.pets.pet }))
          .catch(err => console.log(err))
      : // CHECK SIZE
      checkSize
      ? axios
          .get(
            `${REQUEST}/pet.find?format=json&key=${KEY}&location=${zip}&offset=${offset}&count=${count}&animal=${animal}&size=${size}`
          )
          .then(res => this.setState({ animals: res.data.petfinder.pets.pet }))
          .catch(err => console.log(err))
      : // CHECK SEX
      checkSex
      ? axios
          .get(
            `${REQUEST}/pet.find?format=json&key=${KEY}&location=${zip}&offset=${offset}&count=${count}&animal=${animal}&sex=${sex}`
          )
          .then(res => this.setState({ animals: res.data.petfinder.pets.pet }))
          .catch(err => console.log(err))
      : this.setState({ animals: null });
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
    const { animals } = this.state;

    const page = this.props.match.params.page;
    const zip = this.props.match.params.zip;
    const animal = this.props.match.params.animal;
    const breed = this.props.match.params.breed;
    const size = this.props.match.params.size;
    const sex = this.props.match.params.sex;

    return (
      <div className="Shelter">
        {animals === undefined || animals === null ? (
          <NotFound animals={animals} />
        ) : (
          <>
            <Nav />
            <div className="filterLink">
              <Link to={`/${animal}s/${zip}/1`}>
                <h5>Search New Filter</h5>
              </Link>
            </div>
            <Display animals={animals} />
            <Pagination
              direction={`filter`}
              afterAnimal={`${breed}/${size}/${sex}`}
              zipOrId={zip}
              page={page}
              animals={animals}
              animal={animal}
            />
          </>
        )}
      </div>
    );
  }
}

export default Filtered;
