import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => (
  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
      <h1>Deligtful Lady</h1>
      <nav>
        <Link to="/" style={{ marginRight: '15px' }}>Каталог</Link>
        <Link to="/cart">Корзина</Link>
      </nav>
    </header>
    <main>{children}</main>
    <footer style={{ marginTop: '40px', textAlign: 'center' }}>
      &copy; 2026 Deligtful Lady. Все права защищены.
    </footer>
  </div>
);

export default Layout;
