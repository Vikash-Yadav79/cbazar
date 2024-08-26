import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { CartContext } from '../cartcontext/CartContext';
import './CartModal.css';

const CartModal = ({ isOpen, onClose }) => {
    const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext);
    const navigate = useNavigate(); // Initialize useNavigate

    // Calculate the total price of all items in the cart
    const totalPrice = cartItems.reduce((acc, item) => {
        const itemTotal = Number(item.price) * item.quantity;
        return acc + (isNaN(itemTotal) ? 0 : itemTotal); // Avoid NaN by defaulting to 0 if price is invalid
    }, 0);

    if (!isOpen) return null;

    const handleProceedToPay = () => {
        onClose(); // Close the modal
        navigate('/payment'); // Redirect to the payment page
    };

    return (
        <div className="cart-modal-overlay">
            <div className="cart-modal">
                <div className="cart-header">
                    <h4>Your Cart</h4>
                    <button onClick={onClose} className="close-btn">
                        &times;
                    </button>
                </div>
                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        cartItems.map((item, index) => (
                            <div key={index} className="cart-item">
                                <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h5>{item.name}</h5>
                                    <p>Price: INR {item.price}</p>
                                    <div className="cart-item-quantity">
                                        <button onClick={() => removeFromCart(item)} className="quantity-btn">-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => addToCart(item)} className="quantity-btn">+</button>
                                    </div>
                                    <p className="item-total">Total: INR {Number(item.price) * item.quantity}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                {cartItems.length > 0 && (
                    <div className="cart-footer">
                        <div className="total-price">
                            <h5>Total Price: INR {totalPrice}</h5>
                        </div>
                        <div className="cart-footer-buttons">
                            <button className="clear-cart-btn" onClick={clearCart}>
                                Clear Cart
                            </button>
                            <button className="checkout-btn" onClick={handleProceedToPay}> {/* Redirect on click */}
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartModal;
