import React, { Fragment } from "react";
import "./css/index.css";
import Header from './components/Header';
import Apod from './components/Apod';
import CustomDate from './components/CustomDate';

function App() {
  return (
      <Fragment>
        <Header />
        <Apod />
        <CustomDate />
      </Fragment>
  );
}

export default App;
