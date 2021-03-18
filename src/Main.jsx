import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SideNav from "./components/SideNav/SideNav";
import "./Main.scss";

// get data to populate pages with mock data
import data from "./data/data";

function Main() {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState("55px");

  const toggleNav = () => {
    // change with of sideNav and content margin-left
    setWidth(!open ? "180px" : "55px");
    setOpen(!open);
  };

  return (
    <Router>
      <div className="Main">
        <Header />
        <SideNav
          open={open}
          width={width}
          toggleNav={() => toggleNav()}
          data={data}
        />
        <Switch>
          <Route exact path="/">
            <Content width={width} data={data["home"]} />
          </Route>
          <Route path="/linkedin">
            <Content width={width} data={data["linkedin"]} />
          </Route>
          <Route path="/github">
            <Content width={width} data={data["github"]} />
          </Route>
          <Route path="/twitter">
            <Content width={width} data={data["twitter"]} />
          </Route>
          <Route path="/email">
            <Content width={width} data={data["email"]} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default Main;
