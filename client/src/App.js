import React from "react";
import { BrowserRouter, 
        Route, 
        Switch } from "react-router-dom";
import Home from "./pages/search";
import Saved from "./pages/saved";
import NoResult from "./pages/NoResult";
import Nav from "./components/navbar/navbar.index";
// TODO import and incorporate search, saved and no result pages
function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoResult} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;