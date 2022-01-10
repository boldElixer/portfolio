import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Intro from './components/intro';
import Footer from "./components/footer"
import Contact from "./components/contact";
import About from "./components/about";
import Project from "./components/projects";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/portfolio/about">
            <About />
          </Route>
          <Route exact path="/portfolio/projects">
            <Project />
          </Route>
          <Route exact path="/portfolio/contact">
            <Contact />
          </Route>
          <Route path="/portfolio">
            <Intro />
          </Route>
        </Switch>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
