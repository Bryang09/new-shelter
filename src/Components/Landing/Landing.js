import React, { Component } from "react";
import Hero from "./Hero/Hero";

class Landing extends Component {
  state = {
    shelter: false
  };

  onShelter = () => {
    this.setState({ shelter: true });
  };
  render() {
    const { shelter } = this.state;
    return (
      <div className="Landing">
        <Hero shelter={shelter} onShelter={this.onShelter} />
      </div>
    );
  }
}

export default Landing;
