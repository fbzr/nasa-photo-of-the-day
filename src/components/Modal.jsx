import React from 'react';
import dateFunctions from '../functions';
import styled from 'styled-components';

const ModalDiv = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.9);
    color: white;

    justify-content: center;
    align-content: center;
    display: ${({ modalActive }) => modalActive ? 'flex' : 'none' }
    
`
const ContainerDiv = styled.div`
    position: relative;
    height: 100%;
    max-width: 100%;
    align-self: center;
    justify-self: center;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

const CloseButton = styled.a`
    position: absolute;
    top: 0;
    right: 0;
    margin: 45px;
    font-size: 4rem;
    color: #fff;
    z-index: 1;

    &:hover {
        cursor: pointer;    
    }
`
const ModalImage = styled.img`
    object-fit: contain;
    object-position: center;
    height: 100%;
    max-width: 65%;
    top: 0;
    z-index: -1;
`

const DescriptionDiv = styled.div`
    padding: 30px;
    z-index: 1;
    &:after {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;
    }
`

const ModalTitle = styled.h1`
    margin: 15px 60px 15px 0;
`
const ModalDate = styled.h4`
    margin: 15px 0;
`

const ModalDescription = styled.p`
    margin: 40px 0 15px;
`

const Modal = ({ modalActive, hideModal, apod }) => {
    return ( 
        <ModalDiv modalActive={modalActive}>
            <ContainerDiv>
                <ModalImage src={apod.url} alt={apod.title} />
                <DescriptionDiv>
                    <ModalTitle>{apod.title}</ModalTitle>
                    <ModalDate>{dateFunctions.convertFromUniversalDate(apod.date).toDateString()}</ModalDate>
                    <ModalDescription>{apod.description}</ModalDescription>
                </DescriptionDiv>
                

                <CloseButton onClick={hideModal}><i className="far fa-times-circle"></i></CloseButton>
            </ContainerDiv>
        </ModalDiv> 
    );
}

export default React.memo(Modal);
