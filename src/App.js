import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";

const Hats = () => (
  <div>
    <p>Hats page</p>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage}></Route>
      <Route path="/hats" component={Hats}></Route>
    </div>
  );
}

export default App;
