import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import Doritos from "./Doritos";
import ChiliCheeseFritos from "./ChiliCheeseFritos";
import SourCreamCheddarRuffles from "./SourCreamCheddarRuffles";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <VendingMachine />} />
          <Route path="/doritos" exact><Doritos /></Route>
          <Route path="/chilicheesefritos" exact><ChiliCheeseFritos /></Route>
          <Route path="/sourcreamcheddarruffles" exact><SourCreamCheddarRuffles /></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

<Route path="/" exact>
          <VendingMachine />
        </Route>