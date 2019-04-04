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

const Routes = () => {
  return (
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
        path="/smallAnimals/:zip/:page"
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
    </Switch>
  );
};

export default Routes;
