import React from 'react';

const CartItem = ({ id, name, price, quantity }) => {
    return (
        <div className="cart-item">
            <h4>{name}</h4>
            <p>Precio: ${price}</p>
            <p>Cantidad: {quantity}</p>
            <p>Total: ${price * quantity}</p>
        </div>
    );
};

export default CartItem;
