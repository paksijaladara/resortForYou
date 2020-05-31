import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/rooms" component={Rooms} exact />
        <Route path="/rooms/:slug" component={SingleRoom} exact />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
