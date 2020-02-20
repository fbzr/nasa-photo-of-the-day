import React, {useEffect} from 'react';

const Modal = ({modalActive, hideModal}) => {
    const className = modalActive ? 'modal display-block' : 'modal display-none';

    return ( 
        <div className={className}>
            This is my modal
            <button onClick={hideModal}>close</button>
        </div> 
    );
}

export default Modal
