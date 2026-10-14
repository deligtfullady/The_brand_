import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../store/cartSlice';

const IMG = 'https://raw.githubusercontent.com/deligtfullady/HTML_CSS/main/img';

function Header() {
  const count = useSelector(selectCartCount);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <Link to="/">
            <img src={`${IMG}/logo_header_left.svg`} alt="THE BRAND" className="logo-img" />
          </Link>
          <Link to="/catalog" title="Search">
            <img src={`${IMG}/Vector.png`} alt="Search" className="header-icon" style={{ filter: 'none', width: 26, height: 26, opacity: 1 }} />
          </Link>
        </div>

        <div className="header-right">
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          >
            <img src={`${IMG}/menu.svg`} alt="Menu" className="header-icon" />
          </button>
          <Link to="/catalog" title="Account">
            <img src={`${IMG}/reg.svg`} alt="Account" className="header-icon" />
          </Link>
          <Link to="/cart" className="cart-link" title="Cart">
            <img src={`${IMG}/cart.svg`} alt="Cart" className="header-icon" />
            {count > 0 && <span className="cart-badge">{count}</span>}
          </Link>
        </div>
      </div>

      <nav className={`nav-dropdown ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/catalog" onClick={() => setMenuOpen(false)}>Catalog</NavLink>
        <NavLink to="/cart" onClick={() => setMenuOpen(false)}>Cart</NavLink>
      </nav>
    </header>
  );
}

export default Header;
