import React, { useState, Fragment } from "react";
import "./css/index.css";
import Header from './components/Header';
import CustomApod from './components/CustomApod';
import Week from './components/Week';
import Modal from './components/Modal';

function App() {
  const [modalActive, setModalActive] = useState(false);

  const showModal = () => setModalActive(true);
  const hideModal = () => setModalActive(false);


  return (
      <Fragment>
        <Header />
        <CustomApod />
        <Week showModal={showModal} />
        <Modal modalActive={modalActive} hideModal={hideModal} />
      </Fragment>
  );
}

export default App;
