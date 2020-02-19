import React, { Fragment } from "react";
import "./css/index.css";
import Header from './components/Header';
import Apod from './components/Apod';

function App() {
  return (
      <Fragment>
        <Header />
        <Apod />
      </Fragment>
  );
}

export default App;
