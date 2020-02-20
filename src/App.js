import React, { useState, Fragment } from "react";
import "./css/index.css";
import Header from './components/Header';
import CustomApod from './components/CustomApod';
import Week from './components/Week';
import Modal from './components/Modal';

function App() {
  const [modal, setModal] = useState({
    active: false,
    url: ''
  });

  return (
      <Fragment>
        <Header />
        <CustomApod />
        <Week setModal={setModal} />
        {/* <Modal active={modal.active} setModal={setModal} /> */}
      </Fragment>
  );
}

export default App;
