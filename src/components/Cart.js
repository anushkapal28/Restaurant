// Cart.js
import React, { useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.map(item => (
        <div key={item.id}>
          <span>{item.name}</span>
          <span>{item.quantity} x ${item.price}</span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h2>Total Price: ${getTotalPrice()}</h2>
      <button onClick={() => handleCheckout()}>Checkout</button>
    </div>
  );
};

export default Cart;
