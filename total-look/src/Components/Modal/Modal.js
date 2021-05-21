import React from 'react';
import Product from '../../Product';
import './Modal.css';

function Modal(props){

    return(
        props.open &&(
        <div className="modalContent">
            <div className="myModal">
                <Product />
                <button className="close" onClick={props.onClose}>Cerrar</button>
            </div>
        </div>
        )
    );
};
export default Modal;
