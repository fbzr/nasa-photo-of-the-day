import React from 'react';
import dateFunctions from '../functions';

const Modal = ({ modalActive, hideModal, apod }) => {
    const className = modalActive ? 'modal display-block' : 'modal display-none';

    return ( 
        <div className={className}>
            This is my modal
            <h1>{apod.title}</h1>
            <p>{apod.description}</p>
            <p>{dateFunctions.convertFromUniversalDate(apod.date).toDateString()}</p>

            <button onClick={hideModal}>close</button>
        </div> 
    );
}

export default React.memo(Modal);
