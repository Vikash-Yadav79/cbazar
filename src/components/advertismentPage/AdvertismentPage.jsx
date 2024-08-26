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
                    <img src="https://images.cbazaar.com/PL_Images/Blog-1425.jpg" alt="Great Selection Icon" className="feature-icon mb-2" />
                    <h5>GREAT SELECTION</h5>
                    <p>With over 3000 new designs available weekly, we offer you the latest, widest, and trendy designs in vogue for the season.</p>
                </div>
                <div className="ad-feature-box text-center">
                    <img src="https://images.cbazaar.com/images/faux-georgette-embroidered-anarkali-gown-bgwrsacy5073-s.jpg" alt="Made to Measure Icon" className="feature-icon mb-2" />
                    <h5>MADE TO MEASURE</h5>
                    <p>All products are custom designed carefully by over 70 designers and tailors to give you the best look.</p>
                </div>
                <div className="ad-feature-box text-center">
                    <img src="https://images.cbazaar.com/pl_images/bannerimages/cb-insta-icon.png" alt="On Time Delivery Icon" className="feature-icon mb-2" />
                    <h5>ON TIME DELIVERY</h5>
                    <p>Be it Eid or any festive occasion, we would ensure we keep our delivery timelines.</p>
                </div>
            </div>
        </div>
    );
};

export default AdvertismentPage;



