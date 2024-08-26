// import React, { useContext, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { CartContext } from '../cartcontext/CartContext';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import './CategoryDetails.css';

// const CategoryDetails = () => {
//     const location = useLocation();
//     const { title, varieties, category } = location.state || {}; // Include category in state

//     const { addToCart } = useContext(CartContext);

//     // Safely get the first variety or provide a fallback empty object
//     const firstVariety = varieties?.[0] || {};
//     const [selectedImage, setSelectedImage] = useState(firstVariety.imageUrl || '');

//     const handleAddToCart = (variety) => {
//         const product = {
//             id: variety.id,
//             name: title,
//             imageUrl: variety.imageUrl,
//             price: variety.price,
//             size: variety.size,
//             category: category,
//         };
//         addToCart(product);
//     };
//     return (
//         <div className="container mt-4">
//             <nav aria-label="breadcrumb">
//                 <ol className="breadcrumb">
//                     <li className="breadcrumb-item"><a href="/">Home</a></li>
//                     <li className="breadcrumb-item"><a href="/">Categories</a></li>
//                     <li className="breadcrumb-item active" aria-current="page">{title || 'Category Details'}</li>
//                 </ol>
//             </nav>

//             <div className="row">
//                 <div className="col-md-5">
//                     <div className="product-image">
//                         <img src={selectedImage} alt={title} className="img-fluid" />
//                     </div>
//                     <div className="product-thumbnails mt-4">
//                         {varieties?.map((variety, index) => (
//                             <img
//                                 key={index}
//                                 src={variety.imageUrl}
//                                 alt={`Variety ${index + 1}`}
//                                 className={`img-thumbnail ${selectedImage === variety.imageUrl ? 'border-primary' : ''}`}
//                                 onClick={() => setSelectedImage(variety.imageUrl)}
//                             />
//                         ))}
//                     </div>
//                 </div>
//                 <div className="col-md-7">
//                     <h2>{title}</h2>
//                     <p>Price: INR {firstVariety.price || 'N/A'}</p>
//                     <div className="sizes">
//                         <p>Select Size:</p>
//                         {firstVariety.sizes?.map((size, index) => (
//                             <button key={index} className="btn btn-outline-secondary me-2">
//                                 {size}
//                             </button>
//                         ))}
//                     </div>
//                     <div className="mt-4">
//                         <button className="btn btn-primary btn-lg" onClick={() => handleAddToCart(firstVariety)}>
//                             Add to Cart
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             <div className="mt-5">
//                 <p><strong>Category:</strong> {category}</p>
//                 <p><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia, sem ac pharetra fringilla, elit orci pretium urna, non dictum enim justo nec metus.</p>
//             </div>
//         </div>
//     );
// };

// export default CategoryDetails;



import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../cartcontext/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './CategoryDetails.css';

const CategoryDetails = () => {
    const location = useLocation();
    const { title, varieties, category } = location.state || {}; // Include category in state

    const { addToCart } = useContext(CartContext);

    const firstVariety = varieties?.[0] || {};
    const [selectedImage, setSelectedImage] = useState(firstVariety.imageUrl || '');
    const [selectedSize, setSelectedSize] = useState(firstVariety.sizes?.[0]);

    useEffect(() => {
        if (varieties?.length > 0) {
            setSelectedImage(firstVariety.imageUrl);
            setSelectedSize(firstVariety.sizes?.[0]);
        }
    }, [varieties]);

    const handleAddToCart = (variety) => {
        const product = {
            id: variety.id,
            name: title,
            imageUrl: variety.imageUrl,
            price: variety.price,
            size: selectedSize, // Use selected size
            category: category, // Include category information
        };
        addToCart(product);
    };

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    if (!varieties || !title) {
        return <div className="container mt-4">No category details available.</div>;
    }

    return (
        <div className="container mt-4">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href={`/categories/${category?.toLowerCase()}`}>{category}</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{title || 'Category Details'}</li>
                </ol>
            </nav>

            <div className="row">
                <div className="col-md-5">
                    <div className="product-image">
                        <img src={selectedImage || '/images/fallback.jpg'} alt={title} className="img-fluid" />
                    </div>
                    <div className="product-thumbnails mt-4">
                        {varieties?.map((variety, index) => (
                            <img
                                key={index}
                                src={variety.imageUrl}
                                alt={`Variety ${index + 1}`}
                                className={`img-thumbnail ${selectedImage === variety.imageUrl ? 'border-primary' : ''}`}
                                onClick={() => setSelectedImage(variety.imageUrl)}
                            />
                        ))}
                    </div>
                </div>
                <div className="col-md-7">
                    <h2>{title}</h2>
                    <p>Price: INR {firstVariety.price || 'N/A'}</p>
                    <div className="sizes">
                        <p>Select Size:</p>
                        {firstVariety.sizes?.map((size, index) => (
                            <button
                                key={index}
                                className={`btn btn-outline-secondary me-2 ${selectedSize === size ? 'active' : ''}`}
                                onClick={() => handleSizeSelect(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                    <div className="mt-4">
                        <button className="btn btn-primary btn-lg" onClick={() => handleAddToCart(firstVariety)}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <p><strong>Category:</strong> {category}</p>
                <p><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia, sem ac pharetra fringilla, elit orci pretium urna, non dictum enim justo nec metus.</p>
            </div>
        </div>
    );
};

export default CategoryDetails;

