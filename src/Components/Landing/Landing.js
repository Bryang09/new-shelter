import React, { Component } from "react";
import Hero from "./Hero/Hero";
import Layout from "./Layout/Layout";

class Landing extends Component {
  state = {
    shelter: false,

    dogZip: ""
  };

  onShelter = () => {
    this.setState({ shelter: true });
  };

  onDog = e => {
    e.preventDefault();

    this.setState({ dogZip: e.target.value });
  };

  render() {
    const { shelter, dogZip } = this.state;

    console.log(dogZip);

    return (
      <div className="Landing">
        <Hero shelter={shelter} onShelter={this.onShelter} />
        <Layout onDog={this.onDog} dogZip={dogZip} />
      </div>
    );
  }
}

export default Landing;
