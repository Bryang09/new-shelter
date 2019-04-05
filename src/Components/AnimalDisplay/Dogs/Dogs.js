import React, { Component } from "react";

import axios from "axios";
import { REQUEST, KEY } from "../../keys";
import Display from "../Display";
import Pagination from "../Pagination/Pagination";
import Nav from "../../Nav/Nav";
import Sort from "../Sort/Sort";

class Dogs extends Component {
  state = {
    animals: null,
    Breed: "",
    Size: "",
    Sex: ""
  };

  componentWillMount = () => {
    const zip = parseInt(this.props.match.params.zip);
    const page = parseInt(this.props.match.params.page);
    const offset = page === 1 ? 0 : page === 2 ? 50 : page === 3 ? 100 : 1;
    const count = 50;

    // const breed = this.props.match.params.breed;
    // const size = this.props.match.params.size;
    // const sex = this.props.match.params.sex;

    axios
      .get(
        `${REQUEST}/pet.find?format=json&key=${KEY}&location=${zip}&offset=${offset}&animal=dog&count=${count}`
      )
      .then(res => this.setState({ animals: res.data.petfinder.pets.pet }))
      .catch(err => console.log(err));
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

  // onSubmit = () => {
  //   const { animals, Breed, Size, Sex } = this.state;

  //   const zip = parseInt(this.props.match.params.zip);
  //   const page = parseInt(this.props.match.params.page);
  //   const offset = page === 1 ? 0 : page === 2 ? 50 : page === 3 ? 100 : 1;
  //   const count = 50;

  //   const checkBreed = Breed.length > 0;
  //   const checkSize = Size.length > 0;
  //   const checkSex = Sex.length > 0;

  // const newState = animals.sort( res => { checkBreed && checkSize && checkSex ? res. })

  // {
  //   // CHECK ALL THREE

  //   // ?
  //   if (checkBreed && checkSize && checkSex) {
  //     axios
  //       .get(
  //         `${REQUEST}/pet.find?format=json&key=${KEY}&location=${zip}&offset=${offset}&animal=dog&count=${count}&breed=${Breed}&size=${Size}&sex=${Sex}`
  //       )
  //       .then(res => console.log(res))
  //       .catch(err => console.log(err));
  //   }

  //   // :
  //   // CHECK BREED AND SIZE
  //   else if (checkBreed && checkSize) {
  //     axios
  //       .get(
  //         `${REQUEST}/pet.find?format=json&key=${KEY}&location=${zip}&offset=${offset}&animal=dog&count=${count}&breed=${Breed}&size=${Size}`
  //       )
  //       .then(res => console.log(res))
  //       .catch(err => console.log(err));
  //   } else null;
  // ?

  // :
  // CHECK BREED AND SEX
  // checkBreed && checkSex
  // ? axios
  //     .get(
  //       `${REQUEST}/pet.find?format=json&key=${KEY}&location=${zip}&offset=${offset}&animal=dog&count=${count}&breed=${Breed}&sex=${Sex}`
  //     )
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))
  // : // CHECK SEX AND SIZE
  // checkSize && checkSex
  // ? axios
  //     .get(
  //       `${REQUEST}/pet.find?format=json&key=${KEY}&location=${zip}&offset=${offset}&animal=dog&count=${count}&size=${Size}&sex=${Sex}`
  //     )
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))
  // : // CHECK BREED
  // checkBreed
  // ? axios
  //     .get(
  //       `${REQUEST}/pet.find?format=json&key=${KEY}&location=${zip}&offset=${offset}&animal=dog&count=${count}&breed=${Breed}`
  //     )
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))
  // : // CHECK SIZE
  // checkSize
  // ? axios
  //     .get(
  //       `${REQUEST}/pet.find?format=json&key=${KEY}&location=${zip}&offset=${offset}&animal=dog&count=${count}&size=${Size}`
  //     )
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))
  // : // CHECK SEX
  // checkSex
  // ? axios
  //     .get(
  //       `${REQUEST}/pet.find?format=json&key=${KEY}&location=${zip}&offset=${offset}&animal=dog&count=${count}&sex=${Sex}`
  //     )
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))
  // : null;
  //   }
  // };

  render() {
    const { animals, Breed, Size, Sex } = this.state;

    const page = this.props.match.params.page;
    const zip = this.props.match.params.zip;

    console.log(animals);

    return (
      <div className="Shelter">
        <Nav />
        <Sort
          type="dog"
          onBreed={this.onBreed}
          onSize={this.onSize}
          onSex={this.onSex}
          Breed={Breed}
          Size={Size}
          Sex={Sex}
          zip={zip}
        />
        {animals !== null ? (
          <Display animals={animals} />
        ) : (
          <h1>Searching...</h1>
        )}

        {animals !== null ? (
          <Pagination type="dogs" zipOrId={zip} page={page} animals={animals} />
        ) : null}
      </div>
    );
  }
}

export default Dogs;
