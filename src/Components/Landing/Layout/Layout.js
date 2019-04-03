import React from "react";

import "./Layout.scss";

import { Link } from "react-router-dom";

const Layout = props => {
  const { onDog, dogZip } = props;

  console.log(dogZip);

  return (
    <div className="Layout">
      <div className="layoutContainer">
        <div className="smallOption">
          <div className="img dog" />
          <div className="input">
            <h4>Search For Dogs Near You</h4>
            <form onChange={onDog}>
              <input
                type="text"
                name="dog"
                placeholder="Enter Zip"
                className="animalSearch"
              />
              <Link to={`/dogs/${dogZip}`}>
                <button type="submit" />
              </Link>
            </form>
          </div>
        </div>

        <div className="smallOption">
          {" "}
          <div className="img cat" />
          <div className="input">
            <h4>Search For Dogs Near You</h4>

            <input
              type="text"
              name="dog"
              placeholder="Enter Zip"
              className="animalSearch"
            />
          </div>
        </div>
        <div className="smallOption smallAnimals">
          {" "}
          <div className="img" />
          <div className="input">
            <h4>Search For Dogs Near You</h4>
            <input
              type="text"
              name="dog"
              placeholder="Enter Zip"
              className="animalSearch"
            />
          </div>
        </div>
        <div className="smallOption birds">
          {" "}
          <div className="img" />
          <div className="input">
            <h4>Search For Dogs Near You</h4>

            <input
              type="text"
              name="dog"
              placeholder="Enter Zip"
              className="animalSearch"
            />
          </div>
        </div>
        <div className="smallOption farm">
          {" "}
          <div className="img" />
          <div className="input">
            <h4>Search For Dogs Near You</h4>

            <input
              type="text"
              name="dog"
              placeholder="Enter Zip"
              className="animalSearch"
            />
          </div>
        </div>
        <div className="smallOption reptile">
          {" "}
          <div className="img" />
          <div className="input">
            <h4>Search For Dogs Near You</h4>

            <input
              type="text"
              name="dog"
              placeholder="Enter Zip"
              className="animalSearch"
            />
          </div>
        </div>
        <div className="largeOption horse">
          {" "}
          <div className="img" />
          <div className="input">
            <h4>Search For Dogs Near You</h4>

            <input
              type="text"
              name="dog"
              placeholder="Enter Zip"
              className="animalSearch"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
