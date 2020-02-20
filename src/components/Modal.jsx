import React, {useEffect} from 'react';

const Modal = ({active, setModal}) => {
    const exit = () => {
        setModal({
            active: false,
            url: ''
        });
    }

    return active ?
        (
            <div className='modal' onClick={exit}>
                This is my modal
            </div>
        ) 
        :
        null;
}

export default Modal
