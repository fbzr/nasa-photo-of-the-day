import React from 'react';
import dateFunctions from '../functions';
import styled from 'styled-components';

const ModalDiv = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.7);

    display: ${({ modalActive }) => modalActive ? 'block' : 'none' }
`

const CloseButton = styled.a`
    position: absolute;
    top: 10px;
    right: 10px;
`

const Modal = ({ modalActive, hideModal, apod }) => {
    return ( 
        <ModalDiv modalActive={modalActive}>
            <h1>{apod.title}</h1>
            <p>{apod.description}</p>
            <p>{dateFunctions.convertFromUniversalDate(apod.date).toDateString()}</p>

            <CloseButton onClick={hideModal}>close</CloseButton>
        </ModalDiv> 
    );
}

export default React.memo(Modal);
