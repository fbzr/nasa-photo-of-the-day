import React, { useState, Fragment } from "react";
import "./css/index.css";
// import Header from './components/Header';
// import CustomApod from './components/CustomApod';
import Week from './components/Week';
import Modal from './components/Modal';

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [apod, setApod] = useState({
      title: '',
      description: '',
      url: '',
      date: ''
  });

  const showModal = () => setModalActive(true);
  const hideModal = () => setModalActive(false);

  const setModalApod = (data) => {
    setApod({
      title: data.title,
      description: data.description,
      url: data.url,
      date: data.date
    });
  }


  return (
      <Fragment>
        {/* <Header /> */}
        {/* <CustomApod /> */}
        <Week showModal={showModal} setModalApod={setModalApod} />
        <Modal modalActive={modalActive} hideModal={hideModal} apod={apod} />
      </Fragment>
  );
}

export default App;
