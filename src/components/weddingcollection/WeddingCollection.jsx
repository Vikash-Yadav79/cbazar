// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './WeddingCollection.css';

// const festiveHighlights = [
//     'PRE DRAPED SAREE',
//     'FLOWY DRESSES',
//     'SEQUINS',
//     'BOLD PRINTS',
// ];
// const preDrapedSarees = [
//     {
//         imageUrl: 'https://example.com/path-to-saree1.jpg',
//         price: '₹2299',
//         description: 'Beautifully Embroidered Saree 1'
//     },
//     {
//         imageUrl: 'https://example.com/path-to-saree2.jpg',
//         price: '₹2499',
//         description: 'Beautifully Embroidered Saree 2'
//     },
//     {
//         imageUrl: 'https://example.com/path-to-saree3.jpg',
//         price: '₹2699',
//         description: 'Beautifully Embroidered Saree 3'
//     },
//     {
//         imageUrl: 'https://example.com/path-to-saree4.jpg',
//         price: '₹2899',
//         description: 'Beautifully Embroidered Saree 4'
//     },
//     {
//         imageUrl: 'https://example.com/path-to-saree5.jpg',
//         price: '₹3099',
//         description: 'Beautifully Embroidered Saree 5'
//     },
//     {
//         imageUrl: 'https://example.com/path-to-saree6.jpg',
//         price: '₹3299',
//         description: 'Beautifully Embroidered Saree 6'
//     },
// ];

// const sizes = [30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58];

// const preWeddingFestivities = [
//     {
//         imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/SB22_July19.jpg',
//         title: 'Festivity 1',
//         varieties: [
//             {
//                 imageUrl: 'https://images.cbazaar.com/images/Deep-Green-Velvet-Embroidered-Sequins-A-Line-Lehenga-With-Dupatta-GHSDECB1008-u.jpg',
//                 price: '₹2299',
//                 sizes: ['34', '36', '38', '40', '42', '44'],
//                 description: 'Beautifully Embroidered Festive Wear'
//             },
//             {
//                 imageUrl: 'https://images.cbazaar.com/images/maroon-silk-intricate-gota-work-gorgeous-lehenga--ghsde2024052ma-u.jpg',
//                 price: '₹2299',
//                 sizes: ['34', '36', '38', '40', '42', '44'],
//                 description: 'Beautifully Embroidered Festive Wear'
//             },
//             {
//                 imageUrl: 'https://images.cbazaar.com/images/shine-bright-in-red-faux-georgette-lehenga-with-sparkling-embroidered-sequin-embellishments-ghscsh143837-u.jpg',
//                 price: '₹2299',
//                 sizes: ['34', '36', '38', '40', '42', '44'],
//                 description: 'Beautifully Embroidered Festive Wear'
//             },
//             {
//                 imageUrl: 'https://images.cbazaar.com/images/splendid-faux-georgette-sequins-umbrella-lehenga-ghsdesm45-u.jpg',
//                 price: '₹2299',
//                 sizes: ['34', '36', '38', '40', '42', '44'],
//                 description: 'Beautifully Embroidered Festive Wear'
//             },
//             {
//                 imageUrl: 'https://images.cbazaar.com/images/green-net-embroidered-umbrella-lehenga-ghskl2123b-u.jpg',
//                 price: '₹2299',
//                 sizes: ['34', '36', '38', '40', '42', '44'],
//                 description: 'Beautifully Embroidered Festive Wear'
//             },
//             {
//                 imageUrl: 'https://images.cbazaar.com/images/sunlit-charm-yellow-silk-benarasi-saree-sas3smn1707-u.jpg',
//                 price: '₹2299',
//                 sizes: ['34', '36', '38', '40', '42', '44'],
//                 description: 'Beautifully Embroidered Festive Wear'
//             },

//         ]
//     },
//     {
//         imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/SB23_July19.jpg',
//         title: 'Festivity 2',
//         varieties: [
//             {
//                 imageUrl: 'https://images.cbazaar.com/images/beige-n-yellow-digital-printed-umbrella-lehenga-ghsjssbsl704a-u.jpg',
//                 price: '₹2499',
//                 sizes: ['34', '36', '38', '40', '42', '44'],
//                 description: 'Gorgeous Festive Collection'
//             },
//             {
//                 imageUrl: 'https://images.cbazaar.com/images/yellow-indowestern-sets-with-sequins-jacket-in-georgette-embroidered-beads-iwsuscc52265522-u.jpg',
//                 price: '₹3499',
//                 sizes: ['34', '36', '38', '40', '42', '44'],
//                 description: 'Gorgeous Festive Collection'
//             },
//             {
//                 imageUrl: 'https://images.cbazaar.com/images/Yellow-Banarasi-Art-Silk-Embroidered-N-Stones-Anarkali-Suit-SLSAJ25986902-u.jpg',
//                 price: '₹4499',
//                 sizes: ['34', '36', '38', '40', '42', '44'],
//                 description: 'Gorgeous Festive Collection'
//             },
//             {
//                 imageUrl: 'https://images.cbazaar.com/images/mustard-net-embroidered-n-stones-umbrella-lehenga-ghsak42921002g-u.jpg',
//                 price: '₹5499',
//                 sizes: ['34', '36', '38', '40', '42', '44'],
//                 description: 'Gorgeous Festive Collection'
//             },
//             {
//                 imageUrl: 'https://images.cbazaar.com/images/yellow-faux-georgette-embroidered-sequins-classy-lehenga-ghsss202402-u.jpg',
//                 price: '₹8499',
//                 sizes: ['34', '36', '38', '40', '42', '44'],
//                 description: 'Gorgeous Festive Collection'
//             },
//             {
//                 imageUrl: 'https://images.cbazaar.com/images/Bright-Yellow-Crepe-Heavy-Embroidered-N-Sequins-Umbrella-Lehenga-GHSAJ42308506-u.jpg',
//                 price: '₹5499',
//                 sizes: ['34', '36', '38', '40', '42', '44'],
//                 description: 'Gorgeous Festive Collection'
//             },
//             // Additional varieties can be added here
//         ]
//     },
//     {
//         imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/SB24_July19.jpg',
//         title: 'Festivity 3',
//         varieties: [
//             {
//                 imageUrl: 'https://images.cbazaar.com/images/off-white-georgette-umbrella-lehenga-ghsht01-u.jpg',
//                 price: '₹2299',
//                 sizes: ['34', '36', '38', '40', '42', '44'],
//                 description: 'Beautifully Embroidered Festive Wear'
//             },
//             {
//                 imageUrl: 'https://images.cbazaar.com/images/Grey-Georgette-Embroidered-Umbrella-Lehenga-GHSHTNS01-u.jpg',
//                 price: '₹3299',
//                 sizes: ['34', '36', '38', '40', '42', '44'],
//                 description: 'Beautifully Embroidered Festive Wear'
//             },
//             {
//                 imageUrl: 'https://images.cbazaar.com/images/teal-green-satin-blend-embroidered-indowestern-sets-and-suits-iwsusak47835354-u.jpg',
//                 price: '₹6299',
//                 sizes: ['34', '36', '38', '40', '42', '44'],
//                 description: 'Beautifully Embroidered Festive Wear'
//             },
//             {
//                 imageUrl: 'https://images.cbazaar.com/images/blue-embroidered-long-choli-lehenga-ghscc17203-u.jpg',
//                 price: '₹8299',
//                 sizes: ['34', '36', '38', '40', '42', '44'],
//                 description: 'Beautifully Embroidered Festive Wear'
//             },
//             {
//                 imageUrl: 'https://images.cbazaar.com/images/Green-Embroidered-Georgette-Saree-N-Blouse-Set-SABS02110022-u.jpg',
//                 price: '₹4299',
//                 sizes: ['34', '36', '38', '40', '42', '44'],
//                 description: 'Beautifully Embroidered Festive Wear'
//             },
//             {
//                 imageUrl: 'https://images.cbazaar.com/images/maroon-net-embroidered-n-stones-umbrella-lehenga-ghswe101021maroon-u.jpg',
//                 price: '₹5299',
//                 sizes: ['34', '36', '38', '40', '42', '44'],
//                 description: 'Beautifully Embroidered Festive Wear'
//             },

//         ]
//     },
//     {
//         imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/SB25_July19.jpg',
//         title: 'Festivity 3',
//         varieties: [
//             {
//                 imageUrl: 'https://images.cbazaar.com/images/green-embroidered-sharara-suit-slscc7195-u.jpg',
//                 price: '₹2299',
//                 sizes: ['34', '36', '38', '40', '42', '44'],
//                 description: 'Beautifully Embroidered Festive Wear'
//             },
//             {
//                 imageUrl: 'https://images.cbazaar.com/images/Rose-Pink-Net-Embroidered-Umbrella-Lehenga-GHSAK43157315-u.jpg',
//                 price: '₹3299',
//                 sizes: ['34', '36', '38', '40', '42', '44'],
//                 description: 'Beautifully Embroidered Festive Wear'
//             },
//             {
//                 imageUrl: 'https://images.cbazaar.com/images/green-net-sequins-umbrella-lehenga-ghsde10-u.jpg',
//                 price: '₹5299',
//                 sizes: ['34', '36', '38', '40', '42', '44'],
//                 description: 'Beautifully Embroidered Festive Wear'
//             },
//             {
//                 imageUrl: 'https://images.cbazaar.com/images/pink-embroidered-sequins-mirror-work-palazzo-suit-slscc50185424-u.jpg',
//                 price: '₹9299',
//                 sizes: ['34', '36', '38', '40', '42', '44'],
//                 description: 'Beautifully Embroidered Festive Wear'
//             },
//             {
//                 imageUrl: 'https://images.cbazaar.com/images/Mint-Green-Golden-Sequins-Thread-Work-Saree-SASKY05-u.jpg',
//                 price: '₹1099',
//                 sizes: ['34', '36', '38', '40', '42', '44'],
//                 description: 'Beautifully Embroidered Festive Wear'
//             },
//             {
//                 imageUrl: 'https://images.cbazaar.com/images/mauve-net-a-line-lehenga-ghscc6312-u.jpg',
//                 price: '₹7299',
//                 sizes: ['34', '36', '38', '40', '42', '44'],
//                 description: 'Beautifully Embroidered Festive Wear'
//             },

//         ]
//     },
// ];

// const WeddingCollection = () => {
//     const navigate = useNavigate();

//     const handleFestivityClick = (festivity) => {
//         navigate('/similar-products', { state: festivity });
//     };

//     return (
//         <div className="container mt-5">
//             {/* Festive Highlights */}
//             <div className="text-center mb-4">
//                 <h5>FESTIVE HIGHLIGHTS</h5>
//                 <div className="row justify-content-center">
//                     {festiveHighlights.map((highlight, index) => (
//                         <div key={index} className="col-6 col-md-3 mb-3">
//                             <div className="highlight-box p-3">
//                                 {highlight}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Shop by Size */}
//             <div className="text-center mb-4">
//                 <h5>SHOP BY SIZE</h5>
//                 <div className="d-flex justify-content-center flex-wrap">
//                     {sizes.map((size, index) => (
//                         <button key={index} className="size-button btn btn-outline-dark m-2">
//                             {size}
//                         </button>
//                     ))}
//                 </div>
//             </div>

//             {/* Pre Wedding Festivities */}
//             <div className="text-center mb-4">
//                 <h5>PRE WEDDING FESTIVITIES</h5>
//                 <div className="row">
//                     {preWeddingFestivities.map((festivity, index) => (
//                         <div
//                             key={index}
//                             className="col-md-3 col-sm-6 mb-4"
//                             onClick={() => handleFestivityClick(festivity)}
//                         >
//                             <div className="festivity-card">
//                                 <img
//                                     src={festivity.imageUrl}
//                                     alt={festivity.title}
//                                     className="img-fluid rounded"
//                                 />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default WeddingCollection;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WeddingCollection.css';

const festiveHighlights = [
    'PRE DRAPED SAREE',
    'FLOWY DRESSES',
    'SEQUINS',
    'BOLD PRINTS',
];

const preDrapedSarees = [
    {
        imageUrl: 'https://images.cbazaar.com/images/Floral-Print-Faux-Georgette-Cream-Draped-Saree-SASACY4660-u.jpg',
        price: '₹2299',
        description: 'Beautifully Embroidered Saree 1'
    },
    {
        imageUrl: 'https://images.cbazaar.com/images/teal-georgette-stone-embossed-pre-draped-graceful-saree-with-blouse-sasacy7342-u.jpg',
        price: '₹2499',
        description: 'Beautifully Embroidered Saree 2'
    },
    {
        imageUrl: 'https://images.cbazaar.com/images/black-georgette-stone-embossed-pre-draped-exquisite-saree-with-blouse-sasacy7340-u.jpg',
        price: '₹2699',
        description: 'Beautifully Embroidered Saree 3'
    },
    {
        imageUrl: 'https://images.cbazaar.com/images/printed-grey-faux-georgette-saree-sasacy4666-u.jpg',
        price: '₹2899',
        description: 'Beautifully Embroidered Saree 4'
    },
    {
        imageUrl: 'https://images.cbazaar.com/images/pink-leharia-print-faux-georgette-saree-sasacy4662-u.jpg',
        price: '₹3099',
        description: 'Beautifully Embroidered Saree 5'
    },
    {
        imageUrl: 'https://images.cbazaar.com/images/muslin-silk-ikat-print-pre-draped-saree-sadtb3339-u.jpg',
        price: '₹3299',
        description: 'Beautifully Embroidered Saree 6'
    },
];

const sizes = [30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58];

const preWeddingFestivities = [

    {
        imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/SB22_July19.jpg',
        title: 'Festivity 1',
        varieties: [
            {
                imageUrl: 'https://images.cbazaar.com/images/Deep-Green-Velvet-Embroidered-Sequins-A-Line-Lehenga-With-Dupatta-GHSDECB1008-u.jpg',
                price: '₹2299',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Beautifully Embroidered Festive Wear'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/maroon-silk-intricate-gota-work-gorgeous-lehenga--ghsde2024052ma-u.jpg',
                price: '₹2299',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Beautifully Embroidered Festive Wear'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/shine-bright-in-red-faux-georgette-lehenga-with-sparkling-embroidered-sequin-embellishments-ghscsh143837-u.jpg',
                price: '₹2299',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Beautifully Embroidered Festive Wear'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/splendid-faux-georgette-sequins-umbrella-lehenga-ghsdesm45-u.jpg',
                price: '₹2299',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Beautifully Embroidered Festive Wear'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/green-net-embroidered-umbrella-lehenga-ghskl2123b-u.jpg',
                price: '₹2299',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Beautifully Embroidered Festive Wear'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/sunlit-charm-yellow-silk-benarasi-saree-sas3smn1707-u.jpg',
                price: '₹2299',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Beautifully Embroidered Festive Wear'
            },

        ]
    },
    {
        imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/SB23_July19.jpg',
        title: 'Festivity 2',
        varieties: [
            {
                imageUrl: 'https://images.cbazaar.com/images/beige-n-yellow-digital-printed-umbrella-lehenga-ghsjssbsl704a-u.jpg',
                price: '₹2499',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Gorgeous Festive Collection'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/yellow-indowestern-sets-with-sequins-jacket-in-georgette-embroidered-beads-iwsuscc52265522-u.jpg',
                price: '₹3499',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Gorgeous Festive Collection'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/Yellow-Banarasi-Art-Silk-Embroidered-N-Stones-Anarkali-Suit-SLSAJ25986902-u.jpg',
                price: '₹4499',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Gorgeous Festive Collection'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/mustard-net-embroidered-n-stones-umbrella-lehenga-ghsak42921002g-u.jpg',
                price: '₹5499',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Gorgeous Festive Collection'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/yellow-faux-georgette-embroidered-sequins-classy-lehenga-ghsss202402-u.jpg',
                price: '₹8499',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Gorgeous Festive Collection'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/Bright-Yellow-Crepe-Heavy-Embroidered-N-Sequins-Umbrella-Lehenga-GHSAJ42308506-u.jpg',
                price: '₹5499',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Gorgeous Festive Collection'
            },
            // Additional varieties can be added here
        ]
    },
    {
        imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/SB24_July19.jpg',
        title: 'Festivity 3',
        varieties: [
            {
                imageUrl: 'https://images.cbazaar.com/images/off-white-georgette-umbrella-lehenga-ghsht01-u.jpg',
                price: '₹2299',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Beautifully Embroidered Festive Wear'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/Grey-Georgette-Embroidered-Umbrella-Lehenga-GHSHTNS01-u.jpg',
                price: '₹3299',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Beautifully Embroidered Festive Wear'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/teal-green-satin-blend-embroidered-indowestern-sets-and-suits-iwsusak47835354-u.jpg',
                price: '₹6299',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Beautifully Embroidered Festive Wear'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/blue-embroidered-long-choli-lehenga-ghscc17203-u.jpg',
                price: '₹8299',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Beautifully Embroidered Festive Wear'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/Green-Embroidered-Georgette-Saree-N-Blouse-Set-SABS02110022-u.jpg',
                price: '₹4299',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Beautifully Embroidered Festive Wear'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/maroon-net-embroidered-n-stones-umbrella-lehenga-ghswe101021maroon-u.jpg',
                price: '₹5299',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Beautifully Embroidered Festive Wear'
            },

        ]
    },
    {
        imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/SB25_July19.jpg',
        title: 'Festivity 3',
        varieties: [
            {
                imageUrl: 'https://images.cbazaar.com/images/green-embroidered-sharara-suit-slscc7195-u.jpg',
                price: '₹2299',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Beautifully Embroidered Festive Wear'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/Rose-Pink-Net-Embroidered-Umbrella-Lehenga-GHSAK43157315-u.jpg',
                price: '₹3299',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Beautifully Embroidered Festive Wear'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/green-net-sequins-umbrella-lehenga-ghsde10-u.jpg',
                price: '₹5299',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Beautifully Embroidered Festive Wear'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/pink-embroidered-sequins-mirror-work-palazzo-suit-slscc50185424-u.jpg',
                price: '₹9299',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Beautifully Embroidered Festive Wear'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/Mint-Green-Golden-Sequins-Thread-Work-Saree-SASKY05-u.jpg',
                price: '₹1099',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Beautifully Embroidered Festive Wear'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/mauve-net-a-line-lehenga-ghscc6312-u.jpg',
                price: '₹7299',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Beautifully Embroidered Festive Wear'
            },
        ]
    },


];

const WeddingCollection = () => {
    const navigate = useNavigate();

    const handleFestivityClick = (festivity) => {
        navigate('/similar-products', { state: festivity });
    };

    const handleSareeClick = () => {
        navigate('/pre-draped-sarees', { state: preDrapedSarees });
    };

    return (
        <div className="container mt-5">
            {/* Festive Highlights */}
            <div className="text-center mb-4">
                <h5>FESTIVE HIGHLIGHTS</h5>
                <div className="row justify-content-center">
                    {festiveHighlights.map((highlight, index) => (
                        <div
                            key={index}
                            className="col-6 col-md-3 mb-3"
                            onClick={highlight === 'PRE DRAPED SAREE' ? handleSareeClick : null}
                        >
                            <div className="highlight-box p-3">
                                {highlight}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Shop by Size */}
            <div className="text-center mb-4">
                <h5>SHOP BY SIZE</h5>
                <div className="d-flex justify-content-center flex-wrap">
                    {sizes.map((size, index) => (
                        <button key={index} className="size-button btn btn-outline-dark m-2">
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Pre Wedding Festivities */}
            <div className="text-center mb-4">
                <h5>PRE WEDDING FESTIVITIES</h5>
                <div className="row">
                    {preWeddingFestivities.map((festivity, index) => (
                        <div
                            key={index}
                            className="col-md-3 col-sm-6 mb-4"
                            onClick={() => handleFestivityClick(festivity)}
                        >
                            <div className="festivity-card">
                                <img
                                    src={festivity.imageUrl}
                                    alt={festivity.title}
                                    className="img-fluid rounded"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WeddingCollection;
