import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSignupClick = () => {
    onClose(); // Close the modal before navigating
    navigate('/signup'); // Navigate to the sign-up page
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Login / Signup</h3>
          <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={onClose} />
        </div>
        <div className="modal-body">
          <input type="email" placeholder="Enter your email" className="email-input" />
          <input type="password" placeholder="Enter your password" className="email-input" />
          <a href="#" className="password-link" onClick={handleSignupClick}>SignUp</a>
          <button className="guest-button">CONTINUE AS GUEST</button>
          <div className="or-signin">Or Sign in with...</div>
          <div className="social-buttons">
            <button className="google-button">
              <FontAwesomeIcon icon={faGoogle} className="social-icon" />
              Sign in with Google
            </button>
            <button className="facebook-button">
              <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              Sign in with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
