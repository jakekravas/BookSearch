import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/pages/Navbar";
import './bootstrap.css';
import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar/>
      </Fragment>
    </Router>
  );
}

export default App;
