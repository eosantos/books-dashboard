import React from "react";
import "./index.scss";
import Books from "../Books";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Register from "../Register";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Books} />
        <Route path="/cadastro/" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
