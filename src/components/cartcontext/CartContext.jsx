import React, { createContext, useState } from 'react';

// Create the context
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        // Ensure price is a number
        const product = {
            ...item,
            price: Number(item.price) || 0, // Default to 0 if price is invalid
        };

        const existingItem = cartItems.find(
            (cartItem) =>
                cartItem.id === product.id &&
                cartItem.name === product.name
        );

        if (existingItem) {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === product.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };


    const removeFromCart = (item) => {
        const uniqueKey = `${item.id}-${item.category}-${item.size}`;

        const existingItem = cartItems.find(cartItem => cartItem.uniqueKey === uniqueKey);

        if (existingItem.quantity > 1) {
            // If the quantity is more than 1, reduce the quantity
            setCartItems(
                cartItems.map(cartItem =>
                    cartItem.uniqueKey === uniqueKey
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                )
            );
        } else {
            // Otherwise, remove the item from the cart
            setCartItems(cartItems.filter(cartItem => cartItem.uniqueKey !== uniqueKey));
        }
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
