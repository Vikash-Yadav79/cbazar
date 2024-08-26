import React from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PreDrapedSarees.css';

const PreDrapedSarees = () => {
    const { state: sarees } = useLocation();

    return (
        <div className="container mt-5">
            <h2>Pre Draped Sarees</h2>
            <div className="row">
                {sarees.map((saree, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="saree-card">
                            <img
                                src={saree.imageUrl}
                                alt={`Saree ${index + 1}`}
                                className="img-fluid rounded"
                            />
                            <div className="saree-details">
                                <h5>{saree.description}</h5>
                                <p>{saree.price}</p>
                                <button className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PreDrapedSarees;
