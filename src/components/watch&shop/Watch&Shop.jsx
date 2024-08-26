import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Watch&Shop.css";

const WatchAndShop = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//widget.tagembed.com/embed.min.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="watch-and-shop-container">
      <h2>WATCH AND SHOP</h2>
      <div className="watch-and-shop-widget">
        <div
          className="tagembed-widget"
          style={{ width: '100%', height: '400px' }} // Adjust the height as per your preference
          data-widget-id="161347"
          data-view-url="https://widget.tagembed.com/161347"
        ></div>
      </div>
    </div>
  );
};

export default WatchAndShop;

