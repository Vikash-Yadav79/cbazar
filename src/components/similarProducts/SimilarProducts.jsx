import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './SimilarProducts.css';

const SimilarProducts = () => {
    const location = useLocation();
    const { title, varieties } = location.state || {}; // Safely extract data with fallback

    const navigate = useNavigate();

    const handleProductClick = (product) => {
        navigate('/product-details', { state: product });
    };

    return (
        <div className="container mt-5">
            <h4 className="text-center mb-4">Similar Products for {title}</h4>
            <div className="row">
                {varieties?.slice(0, 6).map((variety, index) => (
                    <div
                        key={index}
                        className="col-md-4 col-sm-6 mb-4"
                        onClick={() => handleProductClick(variety)}
                    >
                        <div className="product-card">
                            <img
                                src={variety.imageUrl}
                                alt={`Variety ${index + 1}`}
                                className="img-fluid rounded"
                            />
                            <h5 className="text-center mt-2">{variety.description}</h5>
                            <p className="text-center">{variety.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SimilarProducts;
