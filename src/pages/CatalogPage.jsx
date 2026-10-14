import React, { useEffect, useState } from 'react';
import { getProducts } from '../store/api';
import ProductList from '../components/ProductList';

const CatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Загрузка товаров...</p>;

  return <ProductList products={products} />;
};

export default CatalogPage;
