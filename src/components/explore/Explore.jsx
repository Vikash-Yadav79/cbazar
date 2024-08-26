// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import './Explore.css'; // Custom CSS file for additional styles

// const categories = [
//     {
//         title: 'BRIDAL TOUCH',
//         imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/SB6_July19.jpg',
//     },
//     {
//         title: 'SHERWANI DELIGHT',
//         imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/SB7_July19.jpg',
//     },
//     {
//         title: 'RaiR',
//         imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/SB8_July19.jpg',
//     },
//     {
//         title: 'SAREE SPLENDOR',
//         imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/SB9_July19.jpg',
//     },
//     {
//         title: 'SAREE SPLENDOR',
//         imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/SB10_July19.jpg',
//     },
//     // new Image

//     {
//         title: 'SAREE SPLENDOR',
//         imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/SB13_July19.jpg',
//     },
//     {
//         title: 'SAREE SPLENDOR',
//         imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/SB12_July19.jpg',
//     },
//     {
//         title: 'SAREE SPLENDOR',
//         imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/SB11_July19.jpg',
//     },
//     {
//         title: 'SAREE SPLENDOR',
//         imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/SB14_July19.jpg',
//     },
//     {
//         title: 'SAREE SPLENDOR',
//         imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/SB15_July19.jpg',
//     },
//     {
//         title: 'SAREE SPLENDOR',
//         imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/SB16_July19.jpg',
//     },
//     {
//         title: 'SAREE SPLENDOR',
//         imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/SB17_July19.jpg',
//     },
// ];

// const Explore = () => {
//     return (
//         <div className="container mt-4">
//             {/* Top Icons Row */}
//             <div className="row text-center mb-4">
//                 <div className="col">
//                     <i className="fas fa-tags fa-2x"></i>
//                     <p>BEST EVER DEALS</p>
//                 </div>
//                 <div className="col">
//                     <i className="fas fa-shipping-fast fa-2x"></i>
//                     <p>EXPRESS SHIPPING</p>
//                 </div>
//                 <div className="col">
//                     <i className="fas fa-bell fa-2x"></i>
//                     <p>NEW ARRIVALS</p>
//                 </div>
//                 <div className="col">
//                     <i className="fas fa-check-circle fa-2x"></i>
//                     <p>READY MADE</p>
//                 </div>
//                 <div className="col">
//                     <i className="fas fa-star fa-2x"></i>
//                     <p>BEST SELLERS</p>
//                 </div>
//             </div>

//             {/* Categories Section */}
//             <h4 className="text-center mb-4">CATEGORIES TO BAG</h4>
//             <div className="row">
//                 {categories.map((category, index) => (
//                     <div key={index} className="col-md-3 col-sm-6 mb-4">
//                         <div className="category-card">
//                             <img src={category.imageUrl} alt={category.title} className="img-fluid" />
//                             <h5 className="text-center mt-2">{category.title}</h5>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Explore;





import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Explore.css'; // Custom CSS file for additional styles

const categories = [
    {
        title: 'Kurta Pajama',
        imageUrl: 'https://images.cbazaar.com/images/cobalt-blue-jacquard-silk-kurta-pyjama-kpsvs125-u.jpg',
        varieties: [
            {
                imageUrl: 'https://images.cbazaar.com/images/navy-blue-dupion-silk-embroidered-kurta-pyjama-kpmvs132-u.jpg',
                price: '₹2299',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Navy Blue Dupion Silk Embroidered Kurta Pajama'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/Navy-Blue-Embroidered-Kurta-Pyjama-Set-KPMSGR1070-u.jpg',
                price: '₹2399',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Navy Blue Embroidered Kurta Pajama Set'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/Grey-Jacquard-Silk-Kurta-Pyjama-KPSVS120-u.jpg',
                price: '₹2199',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Grey Jacquard Silk Kurta Pajama'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/blue-bell-jacquard-silk-kurta-pyjama-kpsvs126-u.jpg',
                price: '₹2099',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Blue Bell Jacquard Silk Kurta Pajama'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/cream-banarasi-silk-jacquard-work-kurta-pyjama-kpmsc2030-u.jpg',
                price: '₹2499',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Cream Banarasi Silk Jacquard Work Kurta Pajama'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/dark-peach-banarasi-silk-embroidered-work-kurta-pyjama-kpmsc2042-u.jpg',
                price: '₹2599',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Dark Peach Banarasi Silk Embroidered Work Kurta Pajama'
            },
        ],
    },
    {
        title: 'Sherwani ',
        imageUrl: 'https://images.cbazaar.com/images/gold-silk-jacquard-indowestern-sherwani-shmhe1709-u.jpg',
        varieties: [
            {
                imageUrl: 'https://images.cbazaar.com/images/dark-cream-silk-embroidered-sequins-indowestern-sherwani-shdkks3474-u.jpg',
                price: '₹2299',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Navy Blue Dupion Silk Embroidered Kurta Pajama'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/blue-embroidered-art-silk-indowestern-sherwani--shmsc2232-u.jpg',
                price: '₹2399',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Navy Blue Embroidered Kurta Pajama Set'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/pista-green-jacquard-silk-brocade-indowestern-sherwani-shmac9215-u.jpg',
                price: '₹2199',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Grey Jacquard Silk Kurta Pajama'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/grey-jacquard-silk-brocade-indowestern-sherwani-shmac9205-u.jpg',
                price: '₹2099',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Blue Bell Jacquard Silk Kurta Pajama'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/black-n-blue-imported-brocade-jacquard-indowestern-nawabi-sherwani--shmac9113-u.jpg',
                price: '₹2499',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Cream Banarasi Silk Jacquard Work Kurta Pajama'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/dark-grey-art-silk-indowestern-sherwani-shmsc2313-u.jpg',
                price: '₹2599',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Dark Peach Banarasi Silk Embroidered Work Kurta Pajama'
            },
        ],
    },
    {
        title: 'Springs Bridal',
        imageUrl: 'https://images.cbazaar.com/images/jam-red-velvet-embroidered-n-stones-a-line-lehenga-ghsak42228117-u.jpg',
        varieties: [
            {
                imageUrl: 'https://images.cbazaar.com/images/yellow-silk-embroidered-umbrella-lehenga-ghsli240910293-u.jpg',
                price: '₹2299',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Navy Blue Dupion Silk Embroidered Kurta Pajama'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/Lilac-Embroidery-N-Hand-Work-Long-Trail-Gown-BGWRCBF5748-u.jpg',
                price: '₹2399',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Navy Blue Embroidered Kurta Pajama Set'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/chic-wedding-umbrella-lehenga-in-blue-georgette-thread-embroidered-sequins-ghscbep5090-u.jpg',
                price: '₹2199',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Grey Jacquard Silk Kurta Pajama'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/mustard-silk-embroidered-umbrella-lehenga-ghsli240910291-u.jpg',
                price: '₹2099',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Blue Bell Jacquard Silk Kurta Pajama'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/wine-velvet-zarkan-work-umbrella-lehenga-ghsli22751726b-u.jpg',
                price: '₹2499',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Cream Banarasi Silk Jacquard Work Kurta Pajama'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/teal-silk-embroidered-sequins-moti-and-zarkan-work-lehenga-for-wedding-ghspf5956te-u.jpg',
                price: '₹2599',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Dark Peach Banarasi Silk Embroidered Work Kurta Pajama'
            },
        ],
    },
    // {
    //     title: 'Sherwani ',
    //     imageUrl: 'https://images.cbazaar.com/pl_images/bannerimages/SB7_July19.jpg',
    //     varieties: [
    //         {
    //             imageUrl: 'https://images.cbazaar.com/images/dark-cream-silk-embroidered-sequins-indowestern-sherwani-shdkks3474-u.jpg',
    //             price: '₹2299',
    //             sizes: ['34', '36', '38', '40', '42', '44'],
    //             description: 'Navy Blue Dupion Silk Embroidered Kurta Pajama'
    //         },
    //         {
    //             imageUrl: 'https://images.cbazaar.com/images/blue-embroidered-art-silk-indowestern-sherwani--shmsc2232-u.jpg',
    //             price: '₹2399',
    //             sizes: ['34', '36', '38', '40', '42', '44'],
    //             description: 'Navy Blue Embroidered Kurta Pajama Set'
    //         },
    //         {
    //             imageUrl: 'https://images.cbazaar.com/images/pista-green-jacquard-silk-brocade-indowestern-sherwani-shmac9215-u.jpg',
    //             price: '₹2199',
    //             sizes: ['34', '36', '38', '40', '42', '44'],
    //             description: 'Grey Jacquard Silk Kurta Pajama'
    //         },
    //         {
    //             imageUrl: 'https://images.cbazaar.com/images/grey-jacquard-silk-brocade-indowestern-sherwani-shmac9205-u.jpg',
    //             price: '₹2099',
    //             sizes: ['34', '36', '38', '40', '42', '44'],
    //             description: 'Blue Bell Jacquard Silk Kurta Pajama'
    //         },
    //         {
    //             imageUrl: 'https://images.cbazaar.com/images/black-n-blue-imported-brocade-jacquard-indowestern-nawabi-sherwani--shmac9113-u.jpg',
    //             price: '₹2499',
    //             sizes: ['34', '36', '38', '40', '42', '44'],
    //             description: 'Cream Banarasi Silk Jacquard Work Kurta Pajama'
    //         },
    //         {
    //             imageUrl: 'https://images.cbazaar.com/images/dark-grey-art-silk-indowestern-sherwani-shmsc2313-u.jpg',
    //             price: '₹2599',
    //             sizes: ['34', '36', '38', '40', '42', '44'],
    //             description: 'Dark Peach Banarasi Silk Embroidered Work Kurta Pajama'
    //         },
    //     ],
    // },
    {
        title: 'salwar-kameez',
        imageUrl: 'https://images.cbazaar.com/images/elegantly-sequins-embroidered-organza-palazzo-suit-slscc49162028-u.jpg',
        varieties: [
            {
                imageUrl: 'https://images.cbazaar.com/images/pink-silk-thread-n-plastic-mirror-work-semi-palazzo-suit-slska45175262-u.jpg',
                price: '₹2299',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Navy Blue Dupion Silk Embroidered Kurta Pajama'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/orange-pure-cotton-palazzo-suit-with-dupatta-womens-classic-wear-sljphtss0026-u.jpg',
                price: '₹2399',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Navy Blue Embroidered Kurta Pajama Set'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/chic-wedding-umbrella-lehenga-in-blue-georgette-thread-embroidered-sequins-ghscbep5090-u.jpg',
                price: '₹2199',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Grey Jacquard Silk Kurta Pajama'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/classy-bottle-green-pure-cotton-anarkali-suit-with-dupatta-sljphtss0013-u.jpg',
                price: '₹2099',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Blue Bell Jacquard Silk Kurta Pajama'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/digital-print-embroidered-straight-pant-suit-with-dupatta-in-white-casual-wear-slsacy8515-u.jpg',
                price: '₹2499',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Cream Banarasi Silk Jacquard Work Kurta Pajama'
            },
            {
                imageUrl: 'https://images.cbazaar.com/images/off-white-georgette-embroidered-n-sequins-sharara-suit--slska41051294-u.jpg',
                price: '₹2599',
                sizes: ['34', '36', '38', '40', '42', '44'],
                description: 'Dark Peach Banarasi Silk Embroidered Work Kurta Pajama'
            },
        ],
    },
    // Add more categories as needed
];

const Explore = () => {
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        navigate('/category-details', { state: category });
    };

    return (
        <div className="container mt-4">
            {/* Top Icons Row */}
            <div className="row text-center mb-4">
                <div className="col">
                    <i className="fas fa-tags fa-2x"></i>
                    <p>BEST EVER DEALS</p>
                </div>
                <div className="col">
                    <i className="fas fa-shipping-fast fa-2x"></i>
                    <p>EXPRESS SHIPPING</p>
                </div>
                <div className="col">
                    <i className="fas fa-bell fa-2x"></i>
                    <p>NEW ARRIVALS</p>
                </div>
                <div className="col">
                    <i className="fas fa-check-circle fa-2x"></i>
                    <p>READY MADE</p>
                </div>
                <div className="col">
                    <i className="fas fa-star fa-2x"></i>
                    <p>BEST SELLERS</p>
                </div>
            </div>

            {/* Categories Section */}
            <h4 className="text-center mb-4">CATEGORIES TO BAG</h4>
            <div className="row">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="col-md-3 col-sm-6 mb-4"
                        onClick={() => handleCategoryClick(category)}
                    >
                        <div className="category-card">
                            <img src={category.imageUrl} alt={category.title} className="img-fluid" />
                            <h5 className="text-center mt-2">{category.title}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Explore;


