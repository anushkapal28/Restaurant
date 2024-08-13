// Checkout.js
import React, { useState } from 'react';

const Checkout = ({ cart, totalPrice }) => {
  const [address, setAddress] = useState('');

  const handlePayment = () => {
    // Call backend to process payment
    fetch('/api/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cart, totalPrice, address }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Payment successful!');
      } else {
        alert('Payment failed.');
      }
    });
  };

  return (
    <div>
      <h1>Checkout</h1>
      <textarea
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter your address"
      />
      <h2>Total Price: ${totalPrice}</h2>
      <button onClick={handlePayment}>Pay</button>
    </div>
  );
};

export default Checkout;
