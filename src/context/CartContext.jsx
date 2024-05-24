import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    const addToCart = (item, quantity) => {
        setCart((prevCart) => [...prevCart, { ...item, quantity }]);
        setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + quantity);
        setTotal((prevTotal) => prevTotal + item.price * quantity);
    };

    const removeFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
        // Recalcular totalQuantity y total después de eliminar un artículo
        const newCart = cart.filter((item) => item.id !== itemId);
        const newTotalQuantity = newCart.reduce((acc, item) => acc + item.quantity, 0);
        const newTotal = newCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalQuantity(newTotalQuantity);
        setTotal(newTotal);
    };

    const clearCart = () => {
        setCart([]);
        setTotalQuantity(0);
        setTotal(0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalQuantity, total }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };
