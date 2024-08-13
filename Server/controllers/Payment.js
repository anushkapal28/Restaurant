
const Razorpay = require('razorpay');
const crypto = require('crypto');
const express = require('express');
const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

router.post('/create-order', async (req, res) => {
  const { totalPrice } = req.body;

  try {
    const order = await razorpay.orders.create({
      amount: totalPrice * 100, 
      currency: 'INR',
      payment_capture: 1,
    });

    res.json({
      success: true,
      orderId: order.id,
      amount: totalPrice * 100,
      currency: 'INR',
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to create order' });
  }
});

router.post('/verify-payment', (req, res) => {
  const { orderId, paymentId, signature } = req.body;

  const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
  hmac.update(`${orderId}|${paymentId}`);
  const generatedSignature = hmac.digest('hex');

  if (generatedSignature === signature) {
    res.json({ success: true, message: 'Payment verified' });
  } else {
    res.json({ success: false, message: 'Payment verification failed' });
  }
});

module.exports = router;
