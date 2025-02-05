import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Introduction />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
