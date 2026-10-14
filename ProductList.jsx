import React, { useState } from 'react';
import ProductCard from './ProductCard';

const sizes = ['XS', 'S', 'M', 'L'];

const ProductList = ({ products }) => {
  const [selectedSize, setSelectedSize] = useState('ALL');

  const filtered =
    selectedSize === 'ALL'
      ? products
      : products.filter((p) => p.size === selectedSize);

  return (
    <div>
      <div style={{ marginBottom: '16px' }}>
        <button onClick={() => setSelectedSize('ALL')}>Все</button>
        {sizes.map((size) => (
          <button key={size} onClick={() => setSelectedSize(size)} style={{ marginLeft: '8px' }}>
            {size}
          </button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
