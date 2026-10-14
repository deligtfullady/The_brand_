import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../store/api';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';

const CartPage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Загрузка...</p>;

  const productsMap = products.reduce((acc, p) => {
    acc[p.id] = p;
    return acc;
  }, {});

  return (
    <div>
      <h2>Корзина</h2>
      {items.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          {items.map((item) => {
            const product = productsMap[item.productId];
            if (!product) return null;
            return (
              <CartItem
                key={product.id}
                product={product}
                quantity={item.quantity}
              />
            );
          })}
          <CartSummary productsMap={productsMap} />
        </>
      )}
    </div>
  );
};

export default CartPage;
