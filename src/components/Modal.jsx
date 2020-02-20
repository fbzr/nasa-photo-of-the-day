import React from 'react';

const Modal = (props) => {
    return props.active ?
        (
            <div className='modal'>
                This is my modal
            </div>
        ) 
        :
        null;
}

export default Modal
