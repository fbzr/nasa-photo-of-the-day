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
    color: white;

    justify-content: center;
    align-content: center;
    display: ${({ modalActive }) => modalActive ? 'flex' : 'none' }
    
`
const ContainerDiv = styled.div`
    position: relative;
    /* width: 70%; */
    height: 90%;
    align-self: center;
    justify-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CloseButton = styled.a`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 5rem;
    color: red;

    &:hover {
        cursor: pointer;    
    }
`
const ModalImage = styled.img`
    /* position: absolute; */
    object-fit: contain;
    object-position: center;
    height: 100%;
    top: 0;
    z-index: -1;
`

const DescriptionDiv = styled.div`
    width: 300px;
    position: absolute;
`

const ModalTitle = styled.h1`
    margin: 15px 0;
`
const ModalParagraph = styled.p`
    margin: 15px 0;
`

const Modal = ({ modalActive, hideModal, apod }) => {
    return ( 
        <ModalDiv modalActive={modalActive}>
            <ContainerDiv>
                <DescriptionDiv>
                    <ModalTitle>{apod.title}</ModalTitle>
                    <ModalParagraph>{dateFunctions.convertFromUniversalDate(apod.date).toDateString()}</ModalParagraph>
                    <ModalParagraph>{apod.description}</ModalParagraph>
                </DescriptionDiv>
                <ModalImage src={apod.url} alt={apod.title} />

                <CloseButton onClick={hideModal}><i class="far fa-times-circle"></i></CloseButton>
            </ContainerDiv>
        </ModalDiv> 
    );
}

export default React.memo(Modal);
