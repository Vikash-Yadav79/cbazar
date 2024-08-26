import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import BannerComponent from './components/banner/BannerCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import WatchAndShop from './components/watch&shop/Watch&Shop';
import Explore from './components/explore/Explore';
import WeddingCollection from './components/weddingcollection/WeddingCollection';
import AdvertismentPage from './components/advertismentPage/AdvertismentPage';
import SimilarProducts from './components/similarProducts/SimilarProducts';
import ProductDetails from './components/productDetails/ProductDetails';
import CategoryDetails from './components/category/CategoryDetails';
import LoginModal from './components/login/LoginModal';
import PaymentPage from './components/paymentpage/PaymentPage';

function App() {
  // State to manage the login modal visibility
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <Router>
      {/* Pass the openLoginModal function to the Header to trigger the modal */}
      <Header openLoginModal={openLoginModal} />
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} /> {/* Render the LoginModal component */}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <BannerComponent />
              <WatchAndShop />
              <Explore />
              <WeddingCollection />
              <AdvertismentPage />
            </>
          }
        />
        <Route path="/category-details" element={<CategoryDetails />} />
        <Route path="/similar-products" element={<SimilarProducts />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

