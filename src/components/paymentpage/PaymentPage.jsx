import React, { useState } from 'react';
import './PaymentPage.css';
import Modal from '../paymentmodal/Modal';

const paymentOptions = [
    { name: 'Google Pay', imageUrl: require('../../assets/paymentlogo.jpeg'), icon: 'https://i.pinimg.com/564x/8d/ec/e1/8dece15cc40aaf66ed47f6591b639d06.jpg' },
    { name: 'PhonePe', imageUrl: require('../../assets/paymentlogo.jpeg'), icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX1y9bRtwN4tkv5dwh33YdbbnJIBj-PRHmWg&s' },
    { name: 'Paytm', imageUrl: require('../../assets/paymentlogo.jpeg'), icon: 'https://w7.pngwing.com/pngs/305/719/png-transparent-paytm-ecommerce-shopping-social-icons-circular-color-icon.png' },
    { name: 'BHIM UPI', imageUrl: require('../../assets/paymentlogo.jpeg'), icon: 'https://images.assettype.com/nationalherald/2020-06/ca0f3273-b9ca-4782-9167-62ea8eefc6e0/af5392dcfbc07100c8e7085eebca5d00__1_.jpg' },
];

const PaymentPage = () => {
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [paymentType, setPaymentType] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handlePaymentTypeChange = (type) => {
        setPaymentType(type);
        setSelectedPayment(null);
    };

    const handlePaymentSelection = (option) => {
        setSelectedPayment(option);
    };

    const handleOrder = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="payment-page container mt-5">
            <h2>Choose Your Payment Option</h2>

            {/* Payment Type Selection */}
            <div className="payment-type-selection mb-4">
                <button
                    className={`btn btn-outline-primary ${paymentType === 'online' ? 'active' : ''}`}
                    onClick={() => handlePaymentTypeChange('online')}
                >
                    Online Payment
                </button>
                <button
                    className={`btn btn-outline-secondary ${paymentType === 'cod' ? 'active' : ''}`}
                    onClick={() => handlePaymentTypeChange('cod')}
                >
                    Cash on Delivery
                </button>
            </div>

            {/* Online Payment Options */}
            {paymentType === 'online' && (
                <div className="online-payment-options mt-4">
                    <h4>Select Payment Method:</h4>
                    <div className="row">
                        {paymentOptions.map((option, index) => (
                            <div
                                key={index}
                                className={`col-md-3 mb-3 payment-option ${selectedPayment === option ? 'selected' : ''}`}
                                onClick={() => handlePaymentSelection(option)}
                            >
                                <div className="payment-option-box text-center p-3 d-flex flex-column align-items-center">
                                    <img src={option.icon} alt={`${option.name} Icon`} className="payment-icon mb-2" />
                                    <p>{option.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Display QR Code */}
                    {selectedPayment && (
                        <div className="qr-code mt-4 text-center">
                            <h5>Scan the QR code using {selectedPayment.name}</h5>
                            <img src={selectedPayment.imageUrl} alt={`${selectedPayment.name} QR Code`} className="img-fluid qr-image" />
                        </div>
                    )}
                </div>
            )}

            {/* Cash on Delivery Message */}
            {paymentType === 'cod' && (
                <div className="cod-message mt-4">
                    <h4>You have selected Cash on Delivery.</h4>
                    <p>Please be ready with the exact amount at the time of delivery.</p>
                </div>
            )}

            {/* Order Now Button */}
            {selectedPayment || paymentType === 'cod' ? (
                <div className="text-center mt-5">
                    <button className="btn btn-success btn-lg mt-4" onClick={handleOrder}>
                        Order Now
                    </button>
                </div>
            ) : null}

            {/* Modal Component */}
            <Modal show={showModal} onClose={handleCloseModal} />
        </div>
    );
};

export default PaymentPage;
