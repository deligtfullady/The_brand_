import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import Benefits from '../components/Benefits';
import Subscribe from '../components/Subscribe';
import products, { categories } from '../data/products';

const HERO_IMG =
  'https://raw.githubusercontent.com/deligtfullady/HTML_CSS/main/img/ImageSlide.png';

function Home() {
  const featured = products.slice(0, 6);

  return (
    <>
      <section className="hero">
        <div className="hero-img">
          <img src={HERO_IMG} alt="THE BRAND model" />
        </div>
        <div className="hero-text">
          <div className="hero-text-inner">
            <h1>
              THE BRAND
              <span>
                OF LUXERIOUS <span className="accent">FASHION</span>
              </span>
            </h1>
          </div>
        </div>
      </section>

      <section className="categories">
        <div className="container categories-grid">
          {categories.map((cat) => (
            <Link
              key={cat.subtitle}
              to={cat.link}
              className={`cat-card ${cat.wide ? 'wide' : ''}`}
            >
              <img src={cat.image} alt={cat.subtitle} loading="lazy" />
              <div className="cat-label">
                <span className="small">{cat.title}</span>
                <span className="big">{cat.subtitle}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="featured">
        <div className="container">
          <div className="section-head">
            <h2>Fetured Items</h2>
            <p>Shop for items based on what we featured in this week</p>
          </div>
          <ProductList products={featured} />
          <div className="browse-wrap">
            <Link to="/catalog" className="btn-outline">
              Browse All Product
            </Link>
          </div>
        </div>
      </section>

      <Benefits />
      <Subscribe />
    </>
  );
}

export default Home;
