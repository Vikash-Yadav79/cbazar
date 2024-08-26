import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../cartcontext/CartContext'; // Adjust the path accordingly
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './ProductDetails.css';

const ProductDetails = () => {
    const location = useLocation();
    const { imageUrl, price, sizes, description } = location.state || {};

    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        const product = { imageUrl, price, description }; // Customize as needed
        addToCart(product);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={imageUrl} alt={description} className="img-fluid rounded" />
                </div>
                <div className="col-md-6">
                    <h4>{description}</h4>
                    <p>Price: {price}</p>
                    <div className="sizes mb-3">
                        <p>Select Size:</p>
                        {sizes?.map((size, index) => (
                            <button key={index} className="btn btn-outline-dark me-2">
                                {size}
                            </button>
                        ))}
                    </div>
                    <button className="btn btn-primary btn-lg" onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
