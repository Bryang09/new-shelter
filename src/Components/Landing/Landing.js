import React, { Component } from "react";
import Hero from "./Hero/Hero";
import Layout from "./Layout/Layout";

class Landing extends Component {
  state = {
    shelter: false,
    shelterZip: null,
    dogZip: null,
    catZip: null,
    smallAnimalZip: null,
    birdZip: null,
    farmZip: null,
    reptileZip: null,
    horseZip: null
  };

  onShelterShow = () => {
    console.log("click");

    this.setState({ shelter: true });
  };

  onShelter = e => {
    e.preventDefault();

    this.setState({ shelterZip: e.target.value });
  };

  onDog = e => {
    e.preventDefault();

    this.setState({ dogZip: e.target.value });
  };

  onCat = e => {
    e.preventDefault();

    this.setState({ catZip: e.target.value });
  };
  onSmallAnimal = e => {
    e.preventDefault();

    this.setState({ smallAnimalZip: e.target.value });
  };
  onBird = e => {
    e.preventDefault();

    this.setState({ birdZip: e.target.value });
  };
  onFarm = e => {
    e.preventDefault();

    this.setState({ farmZip: e.target.value });
  };
  onReptile = e => {
    e.preventDefault();

    this.setState({ reptileZip: e.target.value });
  };
  onHorse = e => {
    e.preventDefault();

    this.setState({ horseZip: e.target.value });
  };

  render() {
    const {
      shelter,
      shelterZip,
      dogZip,
      catZip,
      smallAnimalZip,
      birdZip,
      farmZip,
      reptileZip,
      horseZip
    } = this.state;

    console.log(dogZip);

    return (
      <div className="Landing">
        <Hero
          shelter={shelter}
          onShelterShow={this.onShelterShow}
          shelterZip={shelterZip}
          onShelter={this.onShelter}
        />

        <Layout
          onDog={this.onDog}
          dogZip={dogZip}
          catZip={catZip}
          onCat={this.onCat}
          smallAnimalZip={smallAnimalZip}
          onSmallAnimal={this.onSmallAnimal}
          birdZip={birdZip}
          onBird={this.onBird}
          farmZip={farmZip}
          onFarm={this.onFarm}
          reptileZip={reptileZip}
          onReptile={this.onReptile}
          horseZip={horseZip}
          onHorse={this.onHorse}
        />
      </div>
    );
  }
}

export default Landing;
