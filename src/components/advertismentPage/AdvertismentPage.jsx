// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./AdvertismentPage.css"; // Custom CSS for precise styling

// const AdvertismentPage = () => {
//     return (
//         <div className="advertisement-container">
//             <div className="card-container">
//                 {/* Card 1 with Carousel */}
//                 <div className="card card-left">
//                     <div id="carouselLeft" className="carousel slide" data-bs-ride="carousel">
//                         <div className="carousel-inner">
//                             <div className="carousel-item active">
//                                 <img src="https://images.cbazaar.com/PL_Images/Blog-98750.jpg" className="d-block w-100" alt="Left Banner 1" />
//                             </div>
//                             <div className="carousel-item">
//                                 <img src="https://images.cbazaar.com/images/faux-georgette-embroidered-anarkali-gown-bgwrsacy5073-s.jpg" className="d-block w-100" alt="Left Banner 2" />
//                             </div>
//                             <div className="carousel-item">
//                                 <img src="https://images.cbazaar.com/PL_Images/Blog-52726.jpg" className="d-block w-100" alt="Left Banner 3" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Card 2 with Carousel */}
//                 <div className="card card-middle">
//                     <div id="carouselMiddle" className="carousel slide" data-bs-ride="carousel">
//                         <div className="carousel-inner">
//                             <div className="carousel-item active">
//                                 <img src="https://images.cbazaar.com/PL_Images/Blog-52726.jpg" className="d-block w-100" alt="Middle Banner 1" />
//                             </div>
//                             <div className="carousel-item">
//                                 <img src="https://images.cbazaar.com/PL_Images/Blog-98750.jpg" className="d-block w-100" alt="Middle Banner 2" />
//                             </div>
//                             <div className="carousel-item">
//                                 <img src="https://images.cbazaar.com/images/faux-georgette-embroidered-anarkali-gown-bgwrsacy5073-s.jpg" className="d-block w-100" alt="Middle Banner 3" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Card 3 with Static Image */}
//                 <div className="card card-right">
//                     <img src="https://images.cbazaar.com/pl_images/bannerimages/cb-insta-icon.png" className="d-block w-100" alt="Right Banner" />
//                 </div>
//             </div>

//             <div className="ad-feature-section">
//                 <div className="ad-feature-box">
//                     <img src="https://images.cbazaar.com/PL_Images/Blog-1425.jpg" alt="Icon" className="feature-icon" />
//                     <h5>GREAT SELECTION</h5>
//                     <p>With over 3000 new designs available weekly, we offer you the latest, widest, and trendy designs in vogue for the season.</p>
//                 </div>
//                 <div className="ad-feature-box">
//                     <img src="https://images.cbazaar.com/images/faux-georgette-embroidered-anarkali-gown-bgwrsacy5073-s.jpg" alt="Icon" className="feature-icon" />
//                     <h5>MADE TO MEASURE</h5>
//                     <p>All products are custom designed carefully by over 70 designers and tailors to give you the best look.</p>
//                 </div>
//                 <div className="ad-feature-box">
//                     <img src="https://images.cbazaar.com/pl_images/bannerimages/cb-insta-icon.png" alt="Icon" className="feature-icon" />
//                     <h5>ON TIME DELIVERY</h5>
//                     <p>Be it Eid or any festive occasion, we would ensure we keep our delivery timelines.</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdvertismentPage;


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdvertismentPage.css"; // Custom CSS for precise styling

const AdvertismentPage = () => {
    return (
        <div className="advertisement-container">
            <div className="card-container d-flex justify-content-between">
                {/* Left Card with Carousel */}
                <div className="card card-left">
                    <div id="carouselLeft" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://images.cbazaar.com/ethnovoguette-diaries/278419497-500008323-GHBS02304073RTW-STYLE.jpg" className="d-block w-100" alt="Plus-Size Brides" />
                                <div className="carousel-caption">
                                    <h5>Expert Styling Advice</h5>
                                    <p>For Plus-Size Brides in Lehenga Ensembles</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://images.cbazaar.com/ethnovoguette-diaries/1093291378-400291856-KDGSDF640B-STYLE.jpg" className="d-block w-100" alt="Gown with Dupatta" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://images.cbazaar.com/ethnovoguette-diaries/1061104224-200263185-GHSCC17201-STYLE.jpg" className="d-block w-100" alt="Wedding Styling" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselLeft" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselLeft" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                {/* Middle Card with Images and Testimonials */}
                <div className="card card-middle">
                    <div id="carouselMiddle" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://images.cbazaar.com/PL_Images/Blog-98750.jpg" className="d-block w-100" alt="Review Image 1" />

                            </div>

                            <div className="carousel-item">
                                <img src="https://images.cbazaar.com/PL_Images/Blog-1425.jpg" className="d-block w-100" alt="Review Image 2" />

                            </div>
                            <div className="carousel-item">
                                <img src="  https://images.cbazaar.com/PL_Images/Blog-52726.jpg" className="d-block w-100" alt="Review Image 2" />

                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselMiddle" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselMiddle" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                {/* Right Card with Instagram Banner */}
                <div className="card card-right">
                    <div className="instagram-section">
                        <img src="https://images.cbazaar.com/pl_images/bannerimages/cb-insta-icon.png" className="instagram-logo" alt="Follow Us On Instagram" />
                        <div className="background-overlay"></div>
                    </div>
                </div>
            </div>

            {/* Feature Section */}
            <div className="ad-feature-section d-flex justify-content-around mt-4">
                <div className="ad-feature-box text-center">
                    <img src="data:img/png;base64,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" alt="Great Selection Icon" className="feature-icon mb-2" />
                    <h5>GREAT SELECTION</h5>
                    <p>With over 3000 new designs available weekly, we offer you the latest, widest, and trendy designs in vogue for the season.</p>
                </div>
                <div className="ad-feature-box text-center">
                    <img src="data:img/png;base64,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" alt="Made to Measure Icon" className="feature-icon mb-2" />
                    <h5>MADE TO MEASURE</h5>
                    <p>All products are custom designed carefully by over 70 designers and tailors to give you the best look.</p>
                </div>
                <div className="ad-feature-box text-center">
                    <img src="data:img/png;base64,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" alt="On Time Delivery Icon" className="feature-icon mb-2" />
                    <h5>ON TIME DELIVERY</h5>
                    <p>Be it Eid or any festive occasion, we would ensure we keep our delivery timelines.</p>
                </div>
            </div>
        </div>
    );
};

export default AdvertismentPage;



