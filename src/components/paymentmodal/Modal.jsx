import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h4>Thank You!</h4>
                <p>Your order has been placed successfully. Payment Completed.</p>
                <button onClick={onClose} className="btn btn-primary">Close</button>
            </div>
        </div>
    );
};

export default Modal;
