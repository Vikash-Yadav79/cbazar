// src/components/Footer.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaWhatsapp } from 'react-icons/fa';
import { FaAmazonPay, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';
import { GiBank } from 'react-icons/gi';
import { RiSecurePaymentFill } from 'react-icons/ri';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-secure">
          <span>SHOP SECURELY</span>
          <div className="payment-icons">
            <FaAmazonPay size={40} />
            <GiBank size={40} />
            <FaCcVisa size={40} />
            <FaCcMastercard size={40} />
            <FaCcPaypal size={40} />
            <RiSecurePaymentFill size={40} />
          </div>
        </div>
        <div className="footer-contact">
          <span>MEET US ON</span>
          <div className="social-icons">
            <FaFacebookF size={30} />
            <FaTwitter size={30} />
            <FaInstagram size={30} />
            <FaPinterest size={30} />
            <FaWhatsapp size={30} />
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-column">
          <h3>INDIAN DRESSES</h3>
          <ul>
            <li>Sarees</li>
            <li>Lehengas</li>
            <li>Salwar Kameez</li>
            <li>Sherwanis</li>
            <li>Kurta Pyjamas</li>
            <li>Kids</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>SUPPORT</h3>
          <ul>
            <li>Call Now</li>
            <li>Chat With Us</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Track Order</li>
            <li>Sitemap</li>
            <li>Wholesale</li>
            <li>E-Gift Cards</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>CBAZAAR</h3>
          <ul>
            <li>About Us</li>
            <li>Paisley Membership</li>
            <li>Ethnovog'ette Diaries</li>
            <li>Feedback</li>
            <li>Policies</li>
            <li>Blog</li>
            <li>Knowledge Base</li>
            <li>Seller Registration</li>
            <li>Testimonials</li>
            <li>Partner With Us</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>SHOPPING & PAYMENTS</h3>
          <ul>
            <li>Return Policy</li>
            <li>Request A Product</li>
            <li>Payment Options</li>
            <li>Payment Security</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>RECOMMENDED</h3>
          <ul>
            <li>Student Discount</li>
            <li>Indian Wedding Dresses</li>
            <li>Anarkali Suit</li>
            <li>Sharara Suit</li>
            <li>Ethnovog</li>
            <li>Umbrella Lehenga</li>
            <li>Indowestern Sherwani</li>
          </ul>
        </div>
        <div className="newsletter-column">
          <h3>Don't Miss Out</h3>
          <div className="newsletter">
            <input type="text" placeholder="Enter your email address" />
            <button>Submit</button>
          </div>
          <div className="download-app">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              style={{ width: '130px', marginRight: '10px' }}
            />
            <img
              src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred_2x.png"
              alt="App Store"
              style={{ width: '130px' }}
            />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>www.cbazaar.com © 2024</span>
      </div>
    </footer>
  );
};

export default Footer;
