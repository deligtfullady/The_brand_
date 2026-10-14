import React from 'react';
import { useSelector } from 'react-redux';

const CartSummary = ({ productsMap }) => {
  const { items } = useSelector((state) => state.cart);

  let total = 0;
  items.forEach((item) => {
    const product = productsMap[item.productId];
    if (product) {
      total += product.price * item.quantity;
    }
  });

  return (
    <div style={{ marginTop: '24px', padding: '16px', background: '#f5f5f5', borderRadius: '8px' }}>
      <h3>GRAND TOTAL ${total}</h3>
    </div>
  );
};

export default CartSummary;
