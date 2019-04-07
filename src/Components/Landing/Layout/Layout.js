import React from "react";

import "./Layout.scss";

import { lay } from "./lay";

import { Link } from "react-router-dom";

const Layout = props => {
  const {
    onDog,
    dogZip,
    catZip,
    onCat,
    smallAnimalZip,
    onSmallAnimal,
    birdZip,
    onBird,
    farmZip,
    onFarm,
    reptileZip,
    onReptile,
    horseZip,
    onHorse
  } = props;

  const layout = lay.map(res => {
    const checkDogs = res.name === "Dogs";
    const checkCats = res.name === "Cats";
    const checkSmallAnimals = res.name === "Small Animals";
    const checkBirds = res.name === "Birds";
    const checkFarmAnimals = res.name === "Farm Animals";
    const checkReptile = res.name === "Reptiles";
    const checkHorse = res.name === "Horses";

    return (
      <div className={res.initialClass} key={res.id}>
        <div className={`img ${res.imgClass}`} />
        <div className="input">
          <h4>Search For {res.name}</h4>
          <form
            onChange={
              checkDogs
                ? onDog
                : checkCats
                ? onCat
                : checkSmallAnimals
                ? onSmallAnimal
                : checkBirds
                ? onBird
                : checkFarmAnimals
                ? onFarm
                : checkReptile
                ? onReptile
                : checkHorse
                ? onHorse
                : null
            }
          >
            <input
              type="text"
              name={res.inputName}
              placeholder="Enter Zip"
              className="animalSearch"
            />
            <Link
              to={`${res.linkingDirection}/${
                checkDogs
                  ? dogZip
                  : checkCats
                  ? catZip
                  : checkSmallAnimals
                  ? smallAnimalZip
                  : checkBirds
                  ? birdZip
                  : checkFarmAnimals
                  ? farmZip
                  : checkReptile
                  ? reptileZip
                  : checkHorse
                  ? horseZip
                  : null
              }/1`}
            >
              <button type="submit" />
            </Link>
          </form>
        </div>
      </div>
    );
  });

  return (
    <div className="Layout">
      <div className="layoutContainer">{layout}</div>

      {/* <div className="layoutContainer">
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
      </div> */}
    </div>
  );
};

export default Layout;
