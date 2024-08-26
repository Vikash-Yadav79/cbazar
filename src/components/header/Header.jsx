// import React, { useContext, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
// import { CartContext } from '../cartcontext/CartContext';
// import './Header.css';
// import LoginModal from '../login/LoginModal';
// import CartModal from '../cartmodal/CartModal';
// import { useNavigate } from 'react-router-dom';

// const Header = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isCartModalOpen, setIsCartModalOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   const { cartItems } = useContext(CartContext);
//   const navigate = useNavigate();

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   const openCartModal = () => setIsCartModalOpen(true);
//   const closeCartModal = () => setIsCartModalOpen(false);

//   const menuItems = [
//     {
//       name: 'WEDDING',
//       dropdown: [
//         {
//           header: 'Festival Trends',
//           items: ['Sarees', 'Lehengas', 'Salwar Kameez'],
//         },
//         {
//           header: 'Bridal Wear',
//           items: ['Bridal Sarees', 'Bridal Lehengas', 'Bridal Gowns'],
//         },
//       ],
//     },
//     {
//       name: 'THEMES',
//       dropdown: [
//         {
//           header: 'Casual Wear',
//           items: ['Western Wear', 'Ethnic Wear'],
//         },
//         {
//           header: 'Party Wear',
//           items: ['Gowns', 'Cocktail Dresses', 'Evening Gowns'],
//         },
//       ],
//     },
//     {
//       name: 'RAIR',
//       dropdown: [
//         {
//           header: 'Latest Collection',
//           items: ['New Arrivals', 'Trending Now'],
//         },
//         {
//           header: 'Special Editions',
//           items: ['Limited Edition', 'Designer Collection'],
//         },
//       ],
//     },
//     {
//       name: 'SAREE',
//       dropdown: [
//         {
//           header: 'Styles',
//           items: ['Silk Sarees', 'Cotton Sarees', 'Georgette Sarees'],
//         },
//         {
//           header: 'Occasion',
//           items: ['Party Wear Sarees', 'Casual Sarees', 'Wedding Sarees'],
//         },
//       ],
//     },
//     {
//       name: 'SALWAR KAMEEZ',
//       dropdown: [
//         {
//           header: 'Types',
//           items: ['Anarkali', 'Churidar', 'Palazzo'],
//         },
//         {
//           header: 'Fabric',
//           items: ['Cotton', 'Silk', 'Georgette'],
//         },
//       ],
//     },
//     {
//       name: 'LEHENGA',
//       dropdown: [
//         {
//           header: 'Styles',
//           items: ['Bridal Lehenga', 'Party Lehenga', 'Festival Lehenga'],
//         },
//         {
//           header: 'Fabric',
//           items: ['Silk', 'Net', 'Velvet'],
//         },
//       ],
//     },
//     {
//       name: 'INDO WESTERN SETS',
//       dropdown: [
//         {
//           header: 'Types',
//           items: ['Dresses', 'Gowns', 'Kurta Sets'],
//         },
//         {
//           header: 'Occasion',
//           items: ['Festive Wear', 'Party Wear'],
//         },
//       ],
//     },
//     {
//       name: 'DRESSES AND GOWNS',
//       dropdown: [
//         {
//           header: 'Styles',
//           items: ['Maxi Dresses', 'Midi Dresses', 'Evening Gowns'],
//         },
//         {
//           header: 'Occasion',
//           items: ['Party Wear', 'Casual Wear'],
//         },
//       ],
//     },
//     {
//       name: 'JEWELLERY',
//       dropdown: [
//         {
//           header: 'Types',
//           items: ['Necklaces', 'Earrings', 'Bracelets'],
//         },
//         {
//           header: 'Material',
//           items: ['Gold', 'Silver', 'Imitation'],
//         },
//       ],
//     },
//     {
//       name: 'ETHNOVOG',
//       dropdown: [
//         {
//           header: 'Styles',
//           items: ['Kurtas', 'Sherwanis', 'Jackets'],
//         },
//         {
//           header: 'Occasion',
//           items: ['Festive Wear', 'Wedding Wear'],
//         },
//       ],
//     },
//     {
//       name: 'MEN',
//       dropdown: [
//         {
//           header: 'Ethnic Wear',
//           items: ['Kurtas', 'Sherwanis', 'Pathani Suits'],
//         },
//         {
//           header: 'Western Wear',
//           items: ['Shirts', 'Trousers', 'Suits'],
//         },
//       ],
//     },
//     {
//       name: 'KIDS',
//       dropdown: [
//         {
//           header: 'Boys',
//           items: ['Ethnic Wear', 'Western Wear'],
//         },
//         {
//           header: 'Girls',
//           items: ['Ethnic Wear', 'Party Wear'],
//         },
//       ],
//     },
//   ];
//   const searchKeywords = {
//     haldi: '/haldi',
//     engagement: '/engagement',
//     'kurta pajama': '/kurta-pajama',
//     sangeet: '/sangeet',
//     // Add more keywords as needed
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const searchTerm = searchQuery.toLowerCase().trim();

//     if (searchKeywords[searchTerm]) {
//       // Redirect to the corresponding route using navigate
//       navigate(searchKeywords[searchTerm]);
//     } else {
//       alert("No results found"); // Handle cases where no match is found
//     }
//   };

//   const handleMouseEnter = (index) => {
//     setActiveDropdown(index);
//   };

//   const handleMouseLeave = () => {
//     setActiveDropdown(null);
//   };

//   return (
//     <header>
//       {/* Top Bar */}
//       <div className="top-bar">
//         <div className="shipping-info">
//           Free shipping on orders &gt; INR 1499 | 25000+ Designs | Made To Measure
//         </div>
//       </div>

//       {/* Main Header with Logo, Search Bar, and User Actions */}
//       <div className="main-header">
//         <div className="logo">
//           Vikashbazaar<span className="logo-dot">®</span>
//         </div>

//         <div className="search-bar">
//           <form onSubmit={handleSearch}>
//             <input
//               type="text"
//               placeholder="What Are You Looking For ?"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <button type="submit">
//               <i className="fa fa-search"></i>
//             </button>
//           </form>
//         </div>

//         <div className="user-actions">
//           <div className="user-action-item" onClick={openModal}>
//             <FontAwesomeIcon icon={faUser} size="2x" />
//             <span className="action-name">Sign In</span>
//             <LoginModal isOpen={isModalOpen} onClose={closeModal} />
//           </div>
//           <div className="user-action-item">
//             <FontAwesomeIcon icon={faHeart} size="2x" />
//             <span className="action-name">Shortlist</span>
//           </div>
//           <div className="user-action-item" onClick={openCartModal}>
//             <FontAwesomeIcon icon={faShoppingCart} size="2x" />
//             <span className="action-name">Cart ({cartItems.length})</span> {/* Show cart count */}
//           </div>
//         </div>
//       </div>

//       {/* Navbar for Clothing Categories */}
//       <nav className="category-navbar">
//         <ul className="nav-links">
//           {menuItems.map((menu, index) => (
//             <li
//               key={index}
//               className="nav-item"
//               onMouseEnter={() => handleMouseEnter(index)}
//               onMouseLeave={handleMouseLeave}
//             >
//               {menu.name}
//               {activeDropdown === index && menu.dropdown.length > 0 && (
//                 <div className="dropdown-menu">
//                   {menu.dropdown.map((dropdownItem, subIndex) => (
//                     <div key={subIndex} className="dropdown-section">
//                       <h3 className="dropdown-header">{dropdownItem.header}</h3>
//                       <ul className="dropdown-list">
//                         {dropdownItem.items.map((item, itemIndex) => (
//                           <li key={itemIndex} className="dropdown-item">
//                             {item}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* Cart Modal */}
//       <CartModal isOpen={isCartModalOpen} onClose={closeCartModal} />
//     </header>
//   );
// };

// export default Header;




import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../cartcontext/CartContext';
import './Header.css';
import LoginModal from '../login/LoginModal';
import CartModal from '../cartmodal/CartModal';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openCartModal = () => setIsCartModalOpen(true);
  const closeCartModal = () => setIsCartModalOpen(false);

  const menuItems = [
    {
      name: 'WEDDING',
      dropdown: [
        {
          header: 'Festival Trends',
          items: ['Sarees', 'Lehengas', 'Salwar Kameez'],
        },
        {
          header: 'Bridal Wear',
          items: ['Bridal Sarees', 'Bridal Lehengas', 'Bridal Gowns'],
        },
      ],
    },
    {
      name: 'THEMES',
      dropdown: [
        {
          header: 'Casual Wear',
          items: ['Western Wear', 'Ethnic Wear'],
        },
        {
          header: 'Party Wear',
          items: ['Gowns', 'Cocktail Dresses', 'Evening Gowns'],
        },
      ],
    },
    {
      name: 'RAIR',
      dropdown: [
        {
          header: 'Latest Collection',
          items: ['New Arrivals', 'Trending Now'],
        },
        {
          header: 'Special Editions',
          items: ['Limited Edition', 'Designer Collection'],
        },
      ],
    },
    {
      name: 'SAREE',
      dropdown: [
        {
          header: 'Styles',
          items: ['Silk Sarees', 'Cotton Sarees', 'Georgette Sarees'],
        },
        {
          header: 'Occasion',
          items: ['Party Wear Sarees', 'Casual Sarees', 'Wedding Sarees'],
        },
      ],
    },
    {
      name: 'SALWAR KAMEEZ',
      dropdown: [
        {
          header: 'Types',
          items: ['Anarkali', 'Churidar', 'Palazzo'],
        },
        {
          header: 'Fabric',
          items: ['Cotton', 'Silk', 'Georgette'],
        },
      ],
    },
    {
      name: 'LEHENGA',
      dropdown: [
        {
          header: 'Styles',
          items: ['Bridal Lehenga', 'Party Lehenga', 'Festival Lehenga'],
        },
        {
          header: 'Fabric',
          items: ['Silk', 'Net', 'Velvet'],
        },
      ],
    },
    {
      name: 'INDO WESTERN SETS',
      dropdown: [
        {
          header: 'Types',
          items: ['Dresses', 'Gowns', 'Kurta Sets'],
        },
        {
          header: 'Occasion',
          items: ['Festive Wear', 'Party Wear'],
        },
      ],
    },
    {
      name: 'DRESSES AND GOWNS',
      dropdown: [
        {
          header: 'Styles',
          items: ['Maxi Dresses', 'Midi Dresses', 'Evening Gowns'],
        },
        {
          header: 'Occasion',
          items: ['Party Wear', 'Casual Wear'],
        },
      ],
    },
    {
      name: 'JEWELLERY',
      dropdown: [
        {
          header: 'Types',
          items: ['Necklaces', 'Earrings', 'Bracelets'],
        },
        {
          header: 'Material',
          items: ['Gold', 'Silver', 'Imitation'],
        },
      ],
    },
    {
      name: 'ETHNOVOG',
      dropdown: [
        {
          header: 'Styles',
          items: ['Kurtas', 'Sherwanis', 'Jackets'],
        },
        {
          header: 'Occasion',
          items: ['Festive Wear', 'Wedding Wear'],
        },
      ],
    },
    {
      name: 'MEN',
      dropdown: [
        {
          header: 'Ethnic Wear',
          items: ['Kurtas', 'Sherwanis', 'Pathani Suits'],
        },
        {
          header: 'Western Wear',
          items: ['Shirts', 'Trousers', 'Suits'],
        },
      ],
    },
    {
      name: 'KIDS',
      dropdown: [
        {
          header: 'Boys',
          items: ['Ethnic Wear', 'Western Wear'],
        },
        {
          header: 'Girls',
          items: ['Ethnic Wear', 'Party Wear'],
        },
      ],
    },
  ];

  const searchKeywords = {
    haldi: '/category-details',
    engagement: '/product-details',
    'kurta pajama': '/similar-products',
    sangeet: '/category-detailst',
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = searchQuery.toLowerCase().trim();

    if (searchKeywords[searchTerm]) {
      navigate(searchKeywords[searchTerm]);
    } else {
      alert("No results found");
    }
  };

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="shipping-info">
          Free shipping on orders &gt; INR 1499 | 25000+ Designs | Made To Measure
        </div>
      </div>

      {/* Main Header with Logo, Search Bar, and User Actions */}
      <div className="main-header">
        <div className="logo">
          Vikashbazaar<span className="logo-dot">®</span>
        </div>

        <div className="search-bar">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="What Are You Looking For ?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>

        <div className="user-actions">
          <div className="user-action-item" onClick={openModal}>
            <FontAwesomeIcon icon={faUser} size="2x" />
            <span className="action-name">Sign In</span>
            <LoginModal isOpen={isModalOpen} onClose={closeModal} />
          </div>
          <div className="user-action-item">
            <FontAwesomeIcon icon={faHeart} size="2x" />
            <span className="action-name">Shortlist</span>
          </div>
          <div className="user-action-item" onClick={openCartModal}>
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
            <span className="action-name">Cart ({cartItems.length})</span>
          </div>
        </div>
      </div>

      {/* Navbar for Clothing Categories */}
      <nav className="category-navbar">
        <ul className="nav-links">
          {menuItems.map((menu, index) => (
            <li
              key={index}
              className="nav-item"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {menu.name}
              {activeDropdown === index && menu.dropdown.length > 0 && (
                <div className="dropdown-menu">
                  {menu.dropdown.map((dropdownItem, subIndex) => (
                    <div key={subIndex} className="dropdown-section">
                      <h3 className="dropdown-header">{dropdownItem.header}</h3>
                      <ul className="dropdown-list">
                        {dropdownItem.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="dropdown-item">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Cart Modal */}
      <CartModal isOpen={isCartModalOpen} onClose={closeCartModal} />
    </header>
  );
};

export default Header;
