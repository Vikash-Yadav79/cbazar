import React from 'react';
import { Link } from 'react-router-dom';
import './FestiveHighlights.css'; // Import your CSS for styling

const categories = [
    {
        name: 'PRE DRAPED SAREE',
        images: [
            'https://example.com/path-to-image1.jpg',
            'https://example.com/path-to-image2.jpg',
            'https://example.com/path-to-image3.jpg',
            'https://example.com/path-to-image4.jpg',
            'https://example.com/path-to-image5.jpg',
            'https://example.com/path-to-image6.jpg'
        ]
    },
    {
        name: 'FLOWY DRESSES',
        images: [
            'https://example.com/path-to-image7.jpg',
            'https://example.com/path-to-image8.jpg',
            'https://example.com/path-to-image9.jpg',
            'https://example.com/path-to-image10.jpg',
            'https://example.com/path-to-image11.jpg',
            'https://example.com/path-to-image12.jpg'
        ]
    },
    {
        name: 'SEQUINS',
        images: [
            'https://example.com/path-to-image13.jpg',
            'https://example.com/path-to-image14.jpg',
            'https://example.com/path-to-image15.jpg',
            'https://example.com/path-to-image16.jpg',
            'https://example.com/path-to-image17.jpg',
            'https://example.com/path-to-image18.jpg'
        ]
    },
    {
        name: 'BOLD PRINTS',
        images: [
            'https://example.com/path-to-image19.jpg',
            'https://example.com/path-to-image20.jpg',
            'https://example.com/path-to-image21.jpg',
            'https://example.com/path-to-image22.jpg',
            'https://example.com/path-to-image23.jpg',
            'https://example.com/path-to-image24.jpg'
        ]
    },
];

const FestiveHighlights = () => {
    return (
        <div>
            <h1>Festival Collection</h1>
            <div className="festive-highlights">
                {categories.map((category, index) => (
                    <Link
                        key={index}
                        to={`/category-details/${index}`}
                        className="highlight-column"
                    >
                        {category.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FestiveHighlights;
