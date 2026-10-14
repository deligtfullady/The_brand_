import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/slices/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ border: '1px solid #ddd', padding: '12px', margin: '8px', borderRadius: '6px' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <h3>{product.name}</h3>
      <p>Размер: {product.size}</p>
      <p>Цена: ${product.price}</p>
      <button onClick={() => dispatch(addItem({ productId: product.id }))}>
        В корзину
      </button>
    </div>
  );
};

export default ProductCard;
