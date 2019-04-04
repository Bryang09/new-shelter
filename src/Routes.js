import React from "react";

import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Shelters from "./Components/Shelters/Shelters";
import Shelter from "./Components/AnimalDisplay/Shelter/Shelter";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/shelters/:id" component={Shelters} />
      <Route exact path="/shelter/:id" component={Shelter} />
    </Switch>
  );
};

export default Routes;
