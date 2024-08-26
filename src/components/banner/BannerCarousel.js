// src/components/banner/BannerCarousel.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images from the correct path
import banner1 from '../../assets/banner.jpeg';
import banner2 from '../../assets/banner2.jpeg';
import banner3 from '../../assets/banner3.jpeg';



function BannerCarousel() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                {/* <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={'https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug21.jpg'}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default BannerCarousel;
