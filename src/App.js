import React, { Fragment } from "react";
import "./css/index.css";
import Header from './components/Header';
import CustomApod from './components/CustomApod';
import Week from './components/Week';

function App() {
  return (
      <Fragment>
        <Header />
        <CustomApod />
        <Week />
      </Fragment>
  );
}

export default App;
