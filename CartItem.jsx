import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../store/slices/cartSlice';

const CartItem = ({ product, quantity }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
      <div>
        <h4>{product.name}</h4>
        <p>Размер: {product.size}, Цена: ${product.price}</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button onClick={() => dispatch(updateQuantity({ productId: product.id, quantity: quantity - 1 }))}>-</button>
        <span>{quantity}</span>
        <button onClick={() => dispatch(updateQuantity({ productId: product.id, quantity: quantity + 1 }))}>+</button>
      </div>
      <div>
        ${product.price * quantity}
      </div>
      <button
        onClick={() => dispatch(removeItem({ productId: product.id }))}
        style={{ color: 'red' }}
      >
        Удалить
      </button>
    </div>
  );
};

export default CartItem;
