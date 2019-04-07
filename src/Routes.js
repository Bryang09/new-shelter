import React from "react";

import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Shelters from "./Components/Shelters/Shelters";
import Shelter from "./Components/AnimalDisplay/Shelter/Shelter";
import Dogs from "./Components/AnimalDisplay/Dogs/Dogs";
import Cats from "./Components/AnimalDisplay/Cats/Cats";
import SmallAnimals from "./Components/AnimalDisplay/SmallAnimals/SmallAnimals";
import Birds from "./Components/AnimalDisplay/Birds/Birds";
import Farm from "./Components/AnimalDisplay/Farm/Farm";
import Reptiles from "./Components/AnimalDisplay/Reptiles/Reptiles";
import Horses from "./Components/AnimalDisplay/Horses/Horses";
import Filtered from "./Components/AnimalDisplay/Filtered/Filtered";
import ScrollToTop from "./ScrollToTop";

const Routes = () => {
  return (
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/shelters/:id" component={Shelters} />
        {/* <Route exact path="/shelter/:id/:page" component={Shelter} /> */}
        <Route
          path="/shelter/:id/:page"
          render={props => <Shelter key={props.match.params.page} {...props} />}
        />
        <Route
          path="/dogs/:zip/:page"
          render={props => <Dogs key={props.match.params.page} {...props} />}
        />
        <Route
          path="/cats/:zip/:page"
          render={props => <Cats key={props.match.params.page} {...props} />}
        />
        <Route
          path="/smallfurrys/:zip/:page"
          render={props => (
            <SmallAnimals key={props.match.params.page} {...props} />
          )}
        />
        <Route
          path="/birds/:zip/:page"
          render={props => <Birds key={props.match.params.page} {...props} />}
        />
        <Route
          path="/farmAnimals/:zip/:page"
          render={props => <Farm key={props.match.params.page} {...props} />}
        />
        <Route
          path="/reptiles/:zip/:page"
          render={props => (
            <Reptiles key={props.match.params.page} {...props} />
          )}
        />
        <Route
          path="/horses/:zip/:page"
          render={props => <Horses key={props.match.params.page} {...props} />}
        />
        <Route
          path="/filter/:page/:zip/:animal/:breed?/:size?/:sex?"
          render={props => (
            <Filtered
              key={props.match.params.page || props.match.params.breed}
              {...props}
            />
          )}
        />
      </Switch>
    </ScrollToTop>
  );
};

export default Routes;
